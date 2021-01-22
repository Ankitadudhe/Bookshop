import React, { Component } from 'react';
import Axios from 'axios';
import {Card} from '@material-ui/core';
import AddToCart from '../../atom/addToCart';
import * as actions from "../../../redux/actions/addTocart";
import './adventure.css';
import {connect} from "react-redux";
import Header from '../../organisms/header';

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
        // Axios.post("http://localhost:5000/adventure").then((data)=>{
        //     console.log("data from database",data);
        // })
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '20px' ,justifyContent:'space-between',flex:3}}>
                {
                   this.state.books.map((bookdata)=>(
                       <Card>
                           <div>
                               <img src={bookdata.image} />
                           </div>
                           <div>
                               Author:{bookdata.author}
                           </div>
                           <div>
                               Title:{bookdata.title}
                           </div>
                           <div>
                               Price:Rs{bookdata.price}
                           </div>
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