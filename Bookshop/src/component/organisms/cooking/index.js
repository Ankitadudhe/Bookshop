import React, { Component } from 'react';
import Axios from 'axios';
import {Card,Typography} from '@material-ui/core';
import './cooking.css'
import AddToCart from '../../atom/addToCart'
import Image from "material-ui-image";

class Cooking extends Component {

    constructor(props){
        super(props);
        this.state={
            cookingbooks:[]
        }
    }
    componentDidMount=()=>{
        Axios.post("http://localhost:5000/cooking",{
            
        }).then((data)=>{
            console.log("did mount data from database",data);
        this.setState({
            cookingbooks:data.data
        })
        })

    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '20px' ,justifyContent:'space-between',flex:3}}>
                {
                   this.state.cookingbooks.map((bookdata)=>(
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

export default Cooking;