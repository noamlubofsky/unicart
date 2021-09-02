import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {useHistory} from "react-router";


function ProductDetails() {
    const [productDetails, setProductDetails] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    let history = useHistory();

    const id = useParams().id;


useEffect(() => {
    // setIsLoading(true)
    fetch(`/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
       
      });

    fetch(`/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // setIsLoading(false)
      });
  }, [id]);

  function backToStore(){
    history.push(`/stores/${productDetails.store.id}`)
  }

  return(
      <div>
          {isLoading ? <h2>Loading</h2> :
      <div>
             <Card 
                onClick={backToStore}>
                <h2>Return to Store</h2>
            </Card>
      <img src={productDetails.image_url} alt='img'/>
      <h1>{productDetails.name}</h1>
      <h4>${productDetails.price}</h4>
        <h4>{productDetails.inventory} Left in Stock</h4>
      </div>
}
      </div>
  )

}

const Card = styled.div`
height: 2.5vw;
width: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background-color: #7F55D0;
  border-radius: 20px;
    font-family: "Sans-Serif"; "Optima";
    font-weight: heavier;
    font-size: .5em;
    color: beige;
  &:hover {
    box-shadow: 15px 15px 15px 15px #848484;
    background-image: url(https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif); width: 5vw; height: 2.5vw;
    background-position: 50% 50%;
    cursor: pointer;
    border: 6px solid #7F55D0;
    text-shadow: 2px 2px 8px #7F55D0;
    color: silver;
  }
`;

export default ProductDetails