import React,{Component} from "react";
import {Button} from "@material-ui/core";
import * as actions from "../../../redux/actions/addTocart";
import {connect} from "react-redux";

// export default function AddToCart({
//     products,
//     onAddToCart=()=>{},
// }){
//     return(
//         <div>
//             <Button
//             size="small"
//             color="primary"
//             variant="contained"
//             onClick={onAddToCart}
            
//             >Add To Cart
//           </Button>
//         </div>
//     )
// }

class AddToCart extends Component {
  constructor(props) {
        super(props);
        this.state = {
            productadd: ''
        }
    }
    onAddToCart=()=>{
 this.props.addCart(this.state.productadd);

    }
    render() {
        return (
            <div>
                 <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={this.onAddToCart}
            
            >Add To Cart
          </Button>
            </div>
        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addCart:(product)=>{
            dispatch(actions.addToCart(product));
        }
    }
};
export default connect(null,mapDispatchToProps)(AddToCart);