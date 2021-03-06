import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CartItem from "./CartItem"
import {useHistory} from "react-router";
import { useParams } from "react-router-dom";
import Checkout from "./Checkout"
import { Switch, Route, Redirect} from "react-router-dom";


function ShoppingCart({shoppingCart, updateCartItemQuantity, removeFromCart}) {
  let history = useHistory();
  const id = useParams().id;

  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch(`/shopping_carts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
  }, [id]);
  
  const userCartItems = shoppingCart.filter(item => 
    item.shopping_cart.id === cart.id)
    
    const shop = () => {
      history.push("/products")
    }

    const checkout = () => {
      history.push("/checkout")
    }

  let totals = userCartItems.map((item) => (item.quantity * item.product.price))

  var totalPrice = totals.reduce(function(prev, cur) {
    return prev + cur;
  }, 0);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


    return(
      <Container>
      <div>

        {!userCartItems.length ? 
        <Container1>
        <div><Empty>Your Cart is Empty ☹️</Empty>
        <br></br>          
        <div class="wrapper" >
      <div class="link_wrapper">
    <button onClick={shop}>Go Shop!</button>
  </div>
</div> 
</div> 
</Container1>: 
        <div>
          <div>
            <Header>
          <YourCart>Your Cart</YourCart>
          </Header>
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
        <Total><strong>Total: ${numberWithCommas(totalPrice)}</strong></Total>
        </div>

        {/* <Switch>
        <Route path="/checkout">
            <Checkout
            />
          </Route>
        </Switch> */}

        <CheckoutButton onClick={checkout}>Checkout</CheckoutButton>
        </div>
        }
        </div>
        </Container>
    )
}

const Header = styled.div`
// margin-bottom: 3%;
`;

const YourCart = styled.div`
float: left;
margin-left: 3%;
font-size: 6vh;
font-weight: bold;
margin-bottom: 5px;
font-family: 'Dosis', sans-serif;
`;

const Price = styled.div`
float: right;
margin-bottom: 5px;
font-size: 4vh;
margin-right: 14%;
font-family: 'Dosis', sans-serif;

`;

const CheckoutButton = styled.button`
align-items: center;
justify-content: center;
margin-top: 3%;
margin-left: 40%;
height: 10vh;
width: 25vh;
`;

const Total = styled.div`
float: right;
margin-bottom: 5px;
font-size: 6vh;
margin-right: 10%;
font-family: 'Dosis', sans-serif;

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