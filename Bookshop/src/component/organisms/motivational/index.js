import React, { Component } from 'react';
import Axios from 'axios';
import {Card} from '@material-ui/core';
import './motivational.css'
import AddToCart from '../../atom/addToCart'

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

export default Motivational;