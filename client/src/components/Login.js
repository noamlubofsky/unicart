import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
// import laurel from "./assets/laurellogo.svg";
// import image from "./assets/IMG_0386.jpeg";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Page>
      {/* <Image src={image} alt="background" /> */}
      <Wrapper>
        {/* <Logo src={laurel} alt="logo" /> */}
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
    </Page>
  );
}

// const Logo = styled.h1`
//   font-family: "Helvetica";
//   font-size: 3rem;
//   color: orangered;
//   margin: 8px 0 16px;
// `;

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  /* background-image: url(); */
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

const Wrapper = styled.section`
  max-width: 400px;
  margin: 10vh auto;
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
  margin: 16px 0 16px 0;
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
