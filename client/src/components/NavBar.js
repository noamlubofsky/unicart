import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
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
          <Image src={logo} alt="Logo" onClick={() => {home(); clearSearch()}}/>
      {/* <Search> */}
          <Form  onSubmit={display}>
            <input
              autocomplete="off"
              id="searchbox" 
              onChange={handleChange} 
              type="text" placeholder="What are you looking for?"/>
                  <Button type='submit' onClick={home}>Search</Button>
                    {/* <div class="icon">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                      <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>    </svg>
                    </div> */}
            </Form>
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



const NavButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border: 1px solid transparent;
  border-radius: 6px;
  // padding: 8px 16px;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const CartIcon = styled.div`
margin-right: 5vw;
margin-left: 3vw;
// display: grid;
// grid-template-columns: 10 fr 10 fr;
position: relative;
max-height: 5vh;
min-height: 1vh;
max-width: 5vw:
min-width: 1vw;
top: 0vh;
`;

const CartImage = styled.img`
// margin-right: 10px;
position: relative;
`;

const Amount = styled.div`
// margin-right: 10px;
position: relative;
color:#F5931F;
font-weight: bold;
left: .9vw;
top: -6vh;
// width: 24%;
// margin-bottom: 100px;
`;

const Button = styled.div`
display: fixed;
// position: relative;
width: 9vw;
min-height: 4vh;
height: 6vh;
align-items: center;
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
    width: 12vw;
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
  position: relative;
  // justify-content: center;
  // align-items: center;
  padding: 2vh;
  height: 20vh;
  min-height: 150px;
  width: 100%;
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
    grid-template-rows: 1fr 1fr;
    row-gap: 0vh;
    
    input{
        width: 50%;
        height: 2vw;
        // position: absoslute;
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
        // margin-right:50px;
        border-radius: 20px;
        outline: none;
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
    // button[type=submit]{
    //     width: 50%;
        
    //     position: absolute;
    // }
    `

export default NavBar;
