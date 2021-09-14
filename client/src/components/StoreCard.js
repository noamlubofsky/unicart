import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";


function StoreCard({store}) {
    // const src = `/products/${product.id}`;

    return (
      <Card key={store.id} 
    //   as={Link} to={src}
      >
          {/* <Image src={product.images[0].image_url} alt="Product" /> */}
          <h2>{store.name}</h2>
      </Card>
    );
}

const Card = styled.div`
  height: 5vw;
  width: 30vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid transparent;
  background-color: blue;
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;

export default StoreCard