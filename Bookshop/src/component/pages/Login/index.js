import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './login.css'

import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
          
        }
        this.initialState = {
            email: "",
            password: "",
           
        }
    }
    handlechangeall = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handlesubmit = (event) => {
        event.preventDefault();
            //clear form
            this.setState(this.initialState);
    };
   
    render() {
        return (
            <div className="login-container">
                <form onSubmit={this.handlesubmit} className="form">
                    <div className="login-header">
                        <label className="L">L</label>
                        <label className="o">o</label>
                        <label className="g">g</label>
                        <label className="i">i</label>
                        <label className="n">n</label>
                    </div>
                    <label>  Email </label><br />
                    <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handlechangeall} /> <br />
                    <div style={{ fontSize: 16, color: "red" }}>{this.state.emailError}</div>

                    <label> Password </label><br />
                    <input type="password" name="password" placeholder="********" value={this.state.password} onChange={this.handlechangeall} /> <br />
                    <div style={{ fontSize: 16, color: "red" }}>{this.state.passwordError}</div>
                <Link to="Home"><input type="submit" name="submit" value="Login" id="login-btn" /><br /></Link>    
                    <div className="align-row">
                        <Link to="Register" ><input type="submit" name="Register" value="Register" id="registration-button" /></Link><br />
                        <Link to="/forgetpassword">Forgot password?</Link><br />
                        </div>
                       
                   
                </form>
            </div>


        )

    }
}
export default Login