import {ADD_TO_CART} from "../types/addtocart";

const initialState={
    product:[]
};

export default function AddToCart(state=initialState,action){
   console.log("addto cart reducer....",state);

    switch(action.type){
        case ADD_TO_CART:
         return{...state,product:[...state.product,action.payload]};
        default:
          return state;
    
        }

}