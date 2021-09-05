import styled from "styled-components";


const Footer = () => {
  return (
    // <div id="footer">
    <Content>
      <Info>
        <h1>UNICART</h1>
        <h5>Shopping Made Easy</h5>
        <h5>Noam Lubofsky</h5>
        <h5>Capstone Project</h5>
      </Info>
      
    </Content>
    // </div>
  );
};

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(27, 44, 77);
  color: white;

`;

const Info = styled.div`
  margin-left: 30px;
`;


export default Footer;
