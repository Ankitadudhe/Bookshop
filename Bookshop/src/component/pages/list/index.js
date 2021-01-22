import React,{Component} from "react";
import {connect} from 'react-redux';

class List extends Component{
    render(){
       return(
           <>
          {this.props.alluser.map((user,index)=>(
              <div>
                  {user}
              </div>
          ))}
          </>
       )
    }
}
const mapStateToProps=state=>{
    return{
        alluser:state.Register
    }
}
export default connect(mapStateToProps,null)(List);
