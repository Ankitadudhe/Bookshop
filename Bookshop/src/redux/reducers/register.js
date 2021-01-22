import {REGISTER} from "../types/login";

const initialState=[];

export default function Register(state=initialState,action){
   console.log("=====reducer",state);

    switch(action.type){
        case REGISTER:

            return[
                ...state,
                {
                   name:action.name,
                   email:action.email,
                   password:action.password
                }
            ];
        default:
          return state;
    
        }

}