import React, { Component } from 'react';
import Axios from 'axios';
import {Card,Typography} from '@material-ui/core';
import AddToCart from '../../atom/addToCart';
import * as actions from "../../../redux/actions/addTocart";
import './adventure.css';
import {connect} from "react-redux";
import Header from '../../organisms/header';
import Image from "material-ui-image";

class Adventure extends Component {

    constructor(props){
        super(props);
        this.state={
            product:'',
            books:[],
            
        }
    }
    componentDidMount=()=>{
        Axios.post("http://localhost:5000/adventure",{
            
        }).then((data)=>{
            console.log("did mount data from database",data);
        this.setState({
            books:data.data
        })
        })

    }
    render() {
        let productsall=this.props.product;
        console.log("product lenght",productsall);
      
        return (
            <div classname="adventuresec" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '20px' ,justifyContent:'space-between',flex:3}}>
                {
                   this.state.books.map((bookdata)=>(
                       <Card>
                           <Image
                             src={bookdata.image}
                              style={{ padding: 0, height: 200, textAlign: "center" }}
                              imageStyle={{ width: 350, position: "static" }}
                              disableSpinner
                           />
                           <Typography gutterBottom variant="h6" component="p" color="primary">
                               Author:{bookdata.author}
                            </Typography>
                           <Typography gutterBottom variant="h6" component="p" color="primary">

                           Title:{bookdata.title}
                         </Typography>
                            <Typography style={{ fontWeight: 500 }} color="secondary" component="p">
                               Price:Rs {bookdata.price}
                              </Typography>
                           <AddToCart 
                           products={this.props.product}
                           />
                           
                       </Card>
                   )) 
                }
           </div>
        );
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addCart:(product)=>{
            dispatch(actions.addToCart(product));
        }
    }
};
export default connect(null,mapDispatchToProps)(Adventure);