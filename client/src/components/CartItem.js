import React, { useState, useEffect } from "react";
import styled from "styled-components";

function CartItem({item}) {
    return(
        <div>
            <h1>{item.name}</h1>
        </div>
    )
}

export default CartItem;