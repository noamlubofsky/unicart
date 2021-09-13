import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const src = `/products/${product.id}`;

  return (
    <Card key={product.id}>
      <MoreInfo as={Link} to={src}>
        <Image src={product.image_url} alt="Product" />
        <h2>{product.store.name}</h2>
        <h2>{product.name}</h2>
        <h4>${product.price}</h4>
        <h4>{product.inventory} Left in Stock</h4>
      </MoreInfo>
    </Card>
  );
};

const Image = styled.img`
margin-top: 5px;
width: 10vw;
height: 15vw;
`;

const Card = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10px;
margin-left: 10px
height: 20vw;
width: 15vw;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
text-align: center;
border: 5px solid grey;
background-color: white;

&:hover {
  box-shadow: 0px 0px 15px 0px #848484;
}
`;

const MoreInfo = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  font-weight: bold;
  // font-family: 'Dosis', sans-serif;
`;


export default ProductCard;
