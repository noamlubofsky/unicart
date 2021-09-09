import styled from "styled-components";


const Footer = () => {
  return (
    <Content>
      <Info>
        <h1>UNICART</h1>
        <h5>All Stores. One Cart. That Easy.</h5>
        <h5>Noam Lubofsky - Capstone Project</h5>
      </Info>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(27, 44, 77);
  color: white;
  border-top: 4px solid #F05A27;
  float: bottom;
`;

const Info = styled.div`
margin-top: 10px;
  margin-left: 30px;
  line-height: 20%;
  color: #DFA94E;
`;


export default Footer;
