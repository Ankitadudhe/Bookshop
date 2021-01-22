import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import './home.css'
class Home extends Component {
    render() {
        return (
            <div className="booklist" >
                <h1>List of Different Books</h1>
              <Card className="cardsec"><Link to="/home/Adventure"><h1>Adventure</h1></Link><br /></Card> 
                <Card className="cardsec"><Link to="/home/Cooking"><h1>Cooking</h1></Link><br /></Card> 
              <Card className="cardsec"><Link to="/home/Travel"><h1>Travel</h1></Link><br /></Card> 
              <Card className="cardsec"><Link to="/home/Motivational"><h1>Motivational</h1></Link><br /></Card> 
               </div>
        );
    }
}

export default Home;