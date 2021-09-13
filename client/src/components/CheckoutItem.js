import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function CheckoutItem({item}) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }


    return(
        <div>
            <Container>
                {/* <Card> */}
                    <Image src={item.product.image_url} alt="pic"/>
                {/* </Card> */}
                {/* <ItemContainer> */}
                <ProductInfo>
                    <h1>{item.product.name}</h1>
                    </ProductInfo>
                    <Quantity>
                    <h1>Quantity: {item.quantity}</h1>
                            <br></br>
                        </Quantity>
                            
                    <Price>${numberWithCommas(item.product.price * item.quantity)}</Price>
                {/* </ItemContainer> */}
            </Container>
                <Line/>
        </div>
    )

}
const Container = styled.div`
// float: right;
// margin-right: 5%;
margin-left: 5%;
margin-bottom: 10px;
display: grid;
grid-template-columns: 1fr 2fr 2fr 2fr ;
// row-gap: 20vh;
width: 100%;
`;

const Line = styled.div`
width: 100%;
border-bottom: 4px solid rgb(27, 44, 77)
`

const Price = styled.div`
float: right;
margin-bottom: 5px;
font-size: 4vh;
margin-right: 10%;
`

const Button = styled.div`
display: fixed;
width: 10vw;
min-height: 2vh;
height: 2.2vw;
/* line-height: 50px; */
font-weight: bold;
text-decoration: none;
background-image: linear-gradient(#F05A27, #F5931F);
text-align: center;
color: #fff;
text-transform: uppercase;
letter-spacing: 1px;
/* border: 3px solid #2E6268; */
transition: all .35s;
justify-content: center;
font-size: 1.5vh;
font-family: 'Dosis', sans-serif;
border-radius: 20px;
&:hover {
    width: 12vw;
    // height: 3vw;
    border: 3px solid #F5931F;
    background: transparent;
    color: #F05A27;
    cursor: pointer;
  }
`

const ProductInfo = styled.div`
// float: right;
// margin-bottom: 5px;
// font-size: 4vh;
// margin-right: 10%;
`

const Quantity = styled.div`
// float: right;
// margin-bottom: 5px;
// font-size: 4vh;
// margin-right: 10%;
`

const Remove = styled.div`
margin-top: 4%;
display: grid;
grid-row-gap: 2vh;
`

const Image = styled.img`
margin-top: 5px;
margin-right: 10%;
width: 5vw;
height: 5vw;
`;

const Item = styled.img`
`;

const ItemContainer = styled.div`
float: right;
margin-right: 5%;
margin-bottom: 10px;
display: grid;
width: 100%;
`;

const Card = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10px;
margin-left: 10px
height: 5vw;
width: 2vw;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center
border: 1px solid transparent;
`;

export default CheckoutItem;