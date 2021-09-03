import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";


const NavBar = ({ user, setUser }) => {
  
    function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  // Pull history object using useHistory Hook
  let history = useHistory();

  // Create Callback Function to handle "Back" Button
//   function handleBack() {
//     history.goBack();
//   }

  return (
    <div>
      {/* <Logo>
        <Link to="/">
          <img src={laurel} alt="logo" />
        </Link>
      </Logo> */}
      <Container>
          <h1>UNICART</h1>
        <Nav>
          <NavButton as={Link} to="/shopping">
<div class="wrapper" >
  <div class="link_wrapper">
    <button>Home</button>
    <div class="icon">
    <svg class="svg-icon" viewBox="0 0 20 20">
    <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>      </svg>
    </div>
  </div>
</div>            
</NavButton>

          <NavButton as={Link} to="/cart">
          <div class="wrapper" >
  <div class="link_wrapper">
    <button>Cart</button>
    <div class="icon">
    <svg class="svg-icon" viewBox="0 0 20 20">
    <path d="M17.671,13.945l0.003,0.002l1.708-7.687l-0.008-0.002c0.008-0.033,0.021-0.065,0.021-0.102c0-0.236-0.191-0.428-0.427-0.428H5.276L4.67,3.472L4.665,3.473c-0.053-0.175-0.21-0.306-0.403-0.306H1.032c-0.236,0-0.427,0.191-0.427,0.427c0,0.236,0.191,0.428,0.427,0.428h2.902l2.667,9.945l0,0c0.037,0.119,0.125,0.217,0.239,0.268c-0.16,0.26-0.257,0.562-0.257,0.891c0,0.943,0.765,1.707,1.708,1.707S10,16.068,10,15.125c0-0.312-0.09-0.602-0.237-0.855h4.744c-0.146,0.254-0.237,0.543-0.237,0.855c0,0.943,0.766,1.707,1.708,1.707c0.944,0,1.709-0.764,1.709-1.707c0-0.328-0.097-0.631-0.257-0.891C17.55,14.182,17.639,14.074,17.671,13.945 M15.934,6.583h2.502l-0.38,1.709h-2.312L15.934,6.583zM5.505,6.583h2.832l0.189,1.709H5.963L5.505,6.583z M6.65,10.854L6.192,9.146h2.429l0.19,1.708H6.65z M6.879,11.707h2.027l0.189,1.709H7.338L6.879,11.707z M8.292,15.979c-0.472,0-0.854-0.383-0.854-0.854c0-0.473,0.382-0.855,0.854-0.855s0.854,0.383,0.854,0.855C9.146,15.596,8.763,15.979,8.292,15.979 M11.708,13.416H9.955l-0.189-1.709h1.943V13.416z M11.708,10.854H9.67L9.48,9.146h2.228V10.854z M11.708,8.292H9.386l-0.19-1.709h2.512V8.292z M14.315,13.416h-1.753v-1.709h1.942L14.315,13.416zM14.6,10.854h-2.037V9.146h2.227L14.6,10.854z M14.884,8.292h-2.321V6.583h2.512L14.884,8.292z M15.978,15.979c-0.471,0-0.854-0.383-0.854-0.854c0-0.473,0.383-0.855,0.854-0.855c0.473,0,0.854,0.383,0.854,0.855C16.832,15.596,16.45,15.979,15.978,15.979 M16.917,13.416h-1.743l0.189-1.709h1.934L16.917,13.416z M15.458,10.854l0.19-1.708h2.218l-0.38,1.708H15.458z"></path>    </svg>
    </div>
  </div>
</div> 
          </NavButton>
          {/* {cart > 0 ? <Icon>{cart}</Icon> : null} */}

          <NavButton as={Link} to="/" onClick={handleLogout}>
          <div class="wrapper" >
  <div class="link_wrapper">
    <button>Logout</button>
    <div class="icon">
    <svg class="svg-icon" viewBox="0 0 20 20">
    <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>      </svg>
    </div>
  </div>
</div>  
          </NavButton>
          {/* <NavButton as={Link} to="/shopping">
            Shop All Products
          </NavButton> */}
        </Nav>
      </Container>
    </div>
  );
};
const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 150px;
  border-bottom: 4px solid rgb(47, 98, 104);
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
  border-radius: 50%;
  background-color: orangered;
  color: white;
  text-align: center;
`;

export default NavBar;
