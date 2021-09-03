import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "./CartItem"

function ShoppingCart({shoppingCart, updateCartItemQuantity}) {


    return(
        <div>
       {shoppingCart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            updateCartItemQuantity={updateCartItemQuantity}
          />
        ))}        
        </div>
    )
}



export default ShoppingCart;