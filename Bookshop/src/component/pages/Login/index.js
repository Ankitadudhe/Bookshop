import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './login.css'
import Axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            loginSuccess:"",
            user:[]
          
        }
        this.initialState = {
            email: "",
            password: "",
           
        }
    }
     componentDidMount=()=>{
        Axios.post("http://localhost:5000/loginSuccess",{
            
        }).then((data)=>{
            console.log("login user data from database",data);
        this.setState({
            user:data
        })
        })

    }
    handlechangeall = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handlesubmit = (event) => {
        event.preventDefault();
        this.loginSuccess();
            //clear form
            this.setState(this.initialState);
    };
     sendRedirect = () => {
        this.props.history.push('/home');
    };
    loginSuccess=()=>{
       try{
           let loginsuccess="";
           let welcome="Welcome";
           let data={}
           data.email=(this.state.email);
           data.password=(this.state.password);
            let user=this.state.user;
           const response= Axios.post(`http://localhost:5000/loginSuccess`,data);
           console.log("returned data",this.state.user);
           if(this.state.user.status===200){
               alert('Login successful');
               this.sendRedirect();
               loginsuccess=welcome+this.state.user.name;
               this.setState({loginSuccess:true});
           }
           else if(this.state.user.status===401){
               alert('Email and password does not match');
           }
       }
       catch(e){
           console.log(`Axios request failed:${e}`);
       }
   }
    render() {
        // if(this.state.loginSuccess===true){
        //     return <Redirect to="/home" />
        // }
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
                    {/* <Link to="home"> */}
                        <input type="submit" name="submit" value="Login" id="login-btn" /><br />
                    {/* </Link>     */}
                    <div className="align-row">
                        <Link to="register" ><input type="submit" name="Register" value="Register" id="registration-button" /></Link><br />
                        <Link to="/forgetpassword">Forgot password?</Link><br />
                        </div>  
                </form>
            </div>


        )

    }
}
export default Login