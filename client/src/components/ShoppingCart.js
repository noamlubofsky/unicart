import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "./CartItem"
import {useHistory} from "react-router";


function ShoppingCart({shoppingCart, updateCartItemQuantity, removeFromCart, user}) {
  let history = useHistory();

  const shop = () => {
    history.push("/products")
  }

  let totals = shoppingCart.map((item) => (item.quantity * item.product.price))
  console.log(totals)

  var totalPrice = totals.reduce(function(prev, cur) {
    return prev + cur;
  }, 0);

  const userCartItems = shoppingCart.filter(item => 
    item.user_id !== user.id)

    return(
      <Container>
      <div>

        {!shoppingCart.length ? 
        <Container1>
        <div><Empty>Your Cart is Empty ☹️</Empty>
        <br></br>          
        <div class="wrapper" >
      <div class="link_wrapper">
    <button onClick={shop}>Go Shop!</button>
    {/* <div class="icon">
    <svg class="svg-icon" viewBox="0 0 20 20">
    <path d="M17.638,6.181h-3.844C13.581,4.273,11.963,2.786,10,2.786c-1.962,0-3.581,1.487-3.793,3.395H2.362c-0.233,0-0.424,0.191-0.424,0.424v10.184c0,0.232,0.191,0.424,0.424,0.424h15.276c0.234,0,0.425-0.191,0.425-0.424V6.605C18.062,6.372,17.872,6.181,17.638,6.181 M13.395,9.151c0.234,0,0.425,0.191,0.425,0.424S13.629,10,13.395,10c-0.232,0-0.424-0.191-0.424-0.424S13.162,9.151,13.395,9.151 M10,3.635c1.493,0,2.729,1.109,2.936,2.546H7.064C7.271,4.744,8.506,3.635,10,3.635 M6.605,9.151c0.233,0,0.424,0.191,0.424,0.424S6.838,10,6.605,10c-0.233,0-0.424-0.191-0.424-0.424S6.372,9.151,6.605,9.151 M17.214,16.365H2.786V7.029h3.395v1.347C5.687,8.552,5.332,9.021,5.332,9.575c0,0.703,0.571,1.273,1.273,1.273c0.702,0,1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h5.941v1.347c-0.495,0.176-0.849,0.645-0.849,1.199c0,0.703,0.57,1.273,1.272,1.273s1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h3.395V16.365z"></path>
    </svg>
    </div> */}
  </div>
</div> 
</div> 
</Container1>: 
        <div>
          <YourCart>Your Cart</YourCart>
          <br></br>
          <Price>Price</Price>
          <Line/>
       {userCartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            updateCartItemQuantity={updateCartItemQuantity}
            removeFromCart={removeFromCart}
          />
        ))}        
        <Total>Total: ${totalPrice}</Total>
        </div>
        }
        </div>
        </Container>
    )
}

const YourCart = styled.div`
float: left;
margin-left: 10px;
font-size: 6vh;
font-weight: bold;
margin-bottom: 5px;
`;

const Price = styled.div`
float: right;
margin-bottom: 5px;
font-size: 4vh;
margin-right: 10%;
`;

const Total = styled.div`
float: right;
margin-bottom: 5px;
font-size: 4vh;
margin-right: 10%;
`;

const Line = styled.div`
margin-top: 50px;
  border-bottom: 4px solid rgb(27, 44, 77)
`

const Container = styled.div`
justify-content: center;
align-items: center;
  margin-bottom: 400px;
`;

const Container1 = styled.div`
// margin-left: 10%;
align-items: center;
justify-content: center;
margin-top: 50px;
display: grid;
// margin-bottom: 45vh;
`;

const Empty = styled.div`
// float: right;
// margin-right: 5%;
margin-bottom: 4vh;
font-size: 4em;
font-family: 'Dosis', sans-serif;

`;

export default ShoppingCart;