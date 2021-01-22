import {REGISTER} from "../types/login";

export function register(name,email,password){
    console.log("action register" ,name,email,password);
    return{
        type:REGISTER,
        name:name,
        email:email,
        password:password
    }
}