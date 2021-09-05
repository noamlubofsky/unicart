import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "./CartItem"
import {useHistory} from "react-router";


function ShoppingCart({shoppingCart, updateCartItemQuantity, removeFromCart}) {
  let history = useHistory();

  const shop = () => {
    history.push("/products")
  }

    return(
      <Container>
      <div>
        {!shoppingCart.length ? <div><Empty>Your Cart is Empty :(</Empty><br></br><button onClick={shop}>Go Shop!</button></div> : 
        <div>
       {shoppingCart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            updateCartItemQuantity={updateCartItemQuantity}
            removeFromCart={removeFromCart}
          />
        ))}        
        </div>
        }
        </div>
        </Container>
    )
}

const Container = styled.div`
justify-content: center;
  margin-bottom: 300px;

`;

const Empty = styled.div`
float: right;
margin-right: 5%;
margin-bottom: 10px;
font-size: 4em;
`;

export default ShoppingCart;