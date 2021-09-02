import styled from "styled-components";


const Footer = () => {
  return (
    <Content>
      <Info>
        <h1>UNICART</h1>
        <h5>Sign up for our email</h5>
        <h5>Send us feedback</h5>
        <h5>Order status</h5>
      </Info>
      
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(47, 98, 104);
  color: white;
`;

const Info = styled.div`
  margin-left: 30px;
`;


export default Footer;
