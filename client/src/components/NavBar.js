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
        <Nav>
          <NavButton as={Link} to="/products">
            Products
          </NavButton>
          {/* <NavButton as={Link} to="/cart">
            Cart
          </NavButton>
          {cart > 0 ? <Icon>{cart}</Icon> : null} */}
          <NavButton as={Link} to="/" onClick={handleLogout}>
            Log Out
          </NavButton>
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
  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
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
