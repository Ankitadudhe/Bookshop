import React, { Component } from 'react';
import Axios from 'axios';
import {Card,Typography} from '@material-ui/core';
import './motivational.css'
import AddToCart from '../../atom/addToCart'
import Image from "material-ui-image";

class Motivational extends Component {

    constructor(props){
        super(props);
        this.state={
            motivationalbooks:[]
        }
    }
    componentDidMount=()=>{
        Axios.post("http://localhost:5000/motivational",{
            
        }).then((data)=>{
            console.log("did mount data from database",data);
        this.setState({
            motivationalbooks:data.data
        })
        })

    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '20px' ,justifyContent:'space-between',flex:3}}>
                {
                   this.state.motivationalbooks.map((bookdata)=>(
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
                               Price:Rs  {bookdata.price}
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

export default Motivational;