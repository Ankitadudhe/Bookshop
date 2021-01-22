import {ADD_TO_CART} from "../types/addtocart";

export function addToCart(product){
    console.log("action addd to cart ====" ,product);
    return{
        type:ADD_TO_CART,
        payload:product,
    }
}