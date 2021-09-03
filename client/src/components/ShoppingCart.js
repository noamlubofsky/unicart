import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "./CartItem"

function ShoppingCart({shoppingCart}) {


    return(
        <div>
       {shoppingCart.map(item => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}        
        </div>
    )
}



export default ShoppingCart;