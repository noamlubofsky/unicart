import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import logo from "./assets/logo.png";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Page>
      <Container>
    <Image src={logo} alt="Logo"/>
      <Wrapper>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <p>
              Don't Have an Account? &nbsp;
              <Button onClick={() => setShowLogin(false)}>Sign Up</Button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <p>
              Already have an account? &nbsp;
              <Button onClick={() => setShowLogin(true)}>Log In</Button>
            </p>
          </>
        )}
      </Wrapper>
      </Container>
    </Page>
  );
}

// const Logo = styled.h1`
//   font-family: "Helvetica";
//   font-size: 3rem;
//   color: orangered;
//   margin: 8px 0 16px;
// `;

const Container = styled.div`
justify-content: center;
align-items: center;
  // grid-row-gap: 0;
//   width: 100%;
display: grid;
row-gap: 0; 
`;


const Page = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  /* background-image: url(); */
  background-color: rgb(27, 44, 77);
  display: grid;
  row-gap: 0; 
`;
const Image = styled.img`
// display: flex;
// justify-content:center; // centers in the flex direction and the default flex-direction is row
// align-items:center; // centers perpendicular to the flex direction
height: 30vh; // 100% view height
width: 15vw; // 100% view 
background-color: rgb(27, 44, 77);

`;

const Wrapper = styled.section`
  max-width: 400px;
  // margin: 10vh auto;
  padding: 16px;
  background-color: white;
  /* border-radius: 6px; */
`;
const Logo = styled.img`
  margin-left: 13%;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  // margin: 16px 0 16px 0;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  /* border-radius: 6px; */
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
  background-color: rgba(0, 57, 7, 0.5);
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Login;
