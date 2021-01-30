import React, { Component } from 'react'
import './register.css'
import Axios from 'axios';
import * as actions from "../../../redux/actions/register";
import { Link, Redirect } from 'react-router-dom'
import {connect} from "react-redux";
import Home from '../home';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            registerSuccess:false,
           
        }
        this.initialState = {
            name: "",
            email: "",
            password: "",
        }
    }
    handlechangeall = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };
   handlesubmit = (event) => {
        event.preventDefault();
            this.setState(this.initialState);
            // this.props.registerUser(this.state.name,this.state.email,this.state.password);

        Axios.post("http://localhost:5000/register",{
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }).then(()=>{
             this.setState({registerSuccess:true});
            //  this.handlebutton();
            this.sendRedirect();
            console.log("values inserted");
        })
        
    };
     sendRedirect = () => {
        this.props.history.push('/home');
    };
    handlebutton=()=>{
 if(this.state.registerSuccess===true){
            return <Redirect to="/home" />
        }    }
    render() {
    //    if(this.state.registerSuccess===true){
    //         return <Redirect to="/home" />
    //     }
        return ( 
            <div className="registration-container">
            <form onSubmit={this.handlesubmit} className="reg-form">
                <div className="registration-header">
                        <label className="R">R</label>
                        <label className="e">e</label>
                        <label className="g">g</label>
                        <label className="i">i</label>
                        <label className="s">s</label>
                        <label className="t">t</label>
                        <label className="r">r</label>
                        <label className="a">a</label>
                        <label className="t">t</label>
                        <label className="i">i</label>
                        <label className="o">o</label>
                        <label className="n">n</label>
                    </div>
                    <label>Name </label><br/>
                    <div style={{fontSize:16,color:"red"}}>{this.state.firstnameError}</div>
                    <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handlechangeall}/> <br/>
                    
                    <label>Email </label><br/>
                    <div style={{fontSize:16,color:"red"}}>{this.state.emailError}</div>
                    <input type="text" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handlechangeall} /><br /><br />
                           
                    <label>Password </label><br/>
                    <div style={{fontSize:16,color:"red"}}>{this.state.passwordError}</div>
                    <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handlechangeall} /><br /><br />
                    <input type="submit" value="Submit" id="register"/> <br /><br />
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        registerUser:(name,email,password)=>{
            dispatch(actions.register(name,email,password));
        }
    }
};
export default connect(null,mapDispatchToProps)(Register);