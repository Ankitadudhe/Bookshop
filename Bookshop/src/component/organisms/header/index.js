import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Grid,Badge } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import {connect} from "react-redux";

class Header extends Component{
  render (){
    console.log("====headeer",this.props.products);
return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item spacing={10}>
            <Typography variant="h6" component="h1">
              BOOKSHOP
            </Typography>
          </Grid>
          <Grid item spacing={2}>
          </Grid>
          <Badge badgeContent={this.props.products.length} color="secondary">
          <ShoppingCart />
        </Badge>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
}
const mapStateToProps=(state)=>({
  products:state.AddToCart.product
});
export default connect(mapStateToProps,null)(Header);
