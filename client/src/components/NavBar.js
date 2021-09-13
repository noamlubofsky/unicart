import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import logo from "./assets/logo.png";
import cartpic from "./assets/cart.svg";
import { useParams } from "react-router-dom";


const NavBar = ({ user, handleChange, display, clearSearch, shoppingCart }) => {

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

function home(){
    history.push("/products")
  }

  return (
    <div>
      <Container>
          <Image src={logo} alt="Product" onClick={() => {home(); clearSearch()}}/>
      {/* <Search> */}
          <Form  onSubmit={display}>
            <input
              id="searchbox" 
              onChange={handleChange} 
              type="text" placeholder="What are you looking for?"/>
                  <button type='submit' onClick={home}>Search</button>
                    {/* <div class="icon">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                      <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>    </svg>
                    </div> */}
            </Form>
              {/* <form 
              onSubmit={display}
              >
                <div class="wrapper" >
                  <div class="link_wrapper">
                    <button type='submit' onClick={home}>Search</button>
                    <div class="icon">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                      <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>    </svg>
                    </div>
                  </div>
                </div>     
              </form> */}
            {/* </Search> */}
        <Nav>
          
          <NavButton as={Link} to="/user">
          <div class="wrapper" >
  <div class="link_wrapper">
    <Button>Hello, <br></br> {user.username}!</Button>
    <div class="icon">
    <svg class="svg-icon" viewBox="0 0 20 20">
    <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>    </svg>
    </div>
  </div>
</div> 
          </NavButton>

          <NavButton as={Link} to={`/cart`}>
          {/* <div class="wrapper" >
  <div class="link_wrapper">
    <div class="cart">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
    </div>
  </div>
</div>  */}
<CartIcon>
    <CartImage src={cartpic} alt="cart" />
  
          <Amount>{userCartItems.length}</Amount>
          </CartIcon>
          </NavButton>

        </Nav>
      </Container>
    </div>
  );
};

const CartImage = styled.img`
// margin-right: 10px;
position: absolute;
`;

const CartIcon = styled.div`
margin-right: 75px;
// display: grid;
// grid-template-columns: 10 fr 10 fr;
position: relative;
`;

const CartText = styled.div`
margin-right: 10px;
display: grid;
grid-template-columns: 10 fr 10 fr;
`;

const Amount = styled.div`
// margin-right: 10px;
position: absolute;
color:#F5931F;
font-weight: bold;
right: 0;
// width: 24%;
// margin-bottom: 100px;
`;

const Button = styled.div`
display: fixed;
width: 7vw;
min-height: 2vh;
height: 2.2vw;
/* line-height: 50px; */
font-weight: bold;
text-decoration: none;
background-image: linear-gradient(#F05A27, #F5931F);
text-align: center;
color: #fff;
text-transform: uppercase;
letter-spacing: 1px;
/* border: 3px solid #2E6268; */
transition: all .35s;
justify-content: center;
font-size: 1.5vh;
font-family: 'Dosis', sans-serif;
border-radius: 20px;

  &:hover {
    width: 10vw;
    border: 3px solid #F5931F;
    background: transparent;
    color: #F05A27;
    cursor: pointer;
  }
`;

const Search = styled.div`
margin-top: 20px;
margin-bottom: 15px;
display: grid;
grid-template-columns: 10 fr 10 fr;
`;

const Container = styled.header`
  display: flex;
  // justify-content: center;
  // align-items: center;
  padding: 8px;
  height: 20vh;
  border-bottom: 4px solid #F05A27;
  background-color: rgb(27, 44, 77);
`;

const Logo = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  font-family: "hevetica";
  font-size: 3rem;
  color: orangered;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Image = styled.img`
left: 20px;
cursor: pointer;
height: 20vh;

`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  top: 50px;
  right: 20px;
`;

const NavButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: none;
  }

`;

const Icon = styled.div`
  height: 20px;
  width: 20px;
position: absolute;
top:0;
// width:100%;
  color: #F5931F;
  text-align: center;
`;

const Container2 = styled.div`
  // margin-top: 50px;
  // display: grid;
  // grid-template-columns: 1ch 1ch;
  // row-gap: 0; 

`;

const Container4 = styled.div`
  // margin-left: 10%;
  // margin-top: 50px;
  // display: grid;
  // grid-template-columns: 1fr ;
  // width: 100%;
  // padding: theme.spacing(2),


`;

const Form = styled.form `
    color: white;
    // font-family: Andale Mono, monospace;
    font-size: 2em;
    margin:auto;
    padding:auto;
    width:50%;
    // margin-left: 50%;
    display: grid;
    // grid-template-columns: 20ch auto 20ch auto;
    row-gap: 0vh;

    
    
    input{
        width: 50%;
        height: 2vw;
        position: relative;
        // font-family: 'Montserrat', Arial, sans-serif;
        font-size: calc(1px + 1vw);
        font-weight: 700;
        color: black;
        letter-spacing: 0.02em;
        text-shadow: 0 0 0.15em #grey;
        user-select: none;
        white-space: nowrap;
        filter: blur(0.007em);
        // border-radius:10px;
        margin-top:50px;
        // margin-right:50px


    }
    textarea{
        position: relative;
        // font-family: 'Montserrat', Arial, sans-serif;
        font-size: calc(1px + 1vw);
        font-weight: 700;
        color: black;
        letter-spacing: 0.02em;
        text-shadow: 0 0 0.15em #grey;
        user-select: none;
        white-space: nowrap;
        filter: blur(0.007em);
        border-radius:10px;
        
    }
    button[type=submit]{
        width: 50%;
        
        // position: absolute;
    }`

export default NavBar;
