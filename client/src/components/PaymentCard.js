import styled from "styled-components";
import React, { useState } from "react";

function PaymentCard({payment, setSelectedPayment, setConfirm}) {
    // const [selectedPayment, setSelectedPayment] = useState([])

    const select = () => {
        setSelectedPayment(payment)
        setConfirm(true)
    }

    return(
        <div>
            <Container>
        <Card>
        <h2>{payment.name_on_card}'s {payment.card_type}</h2>
        <h2>{payment.card_number}</h2>
        <h2>{payment.expiration} {payment.cvv}</h2>
        <Button onClick={select}>Use this Payment Method</Button>
        <br></br>
        </Card>
        </Container>
        </div>
    )
}

const Button = styled.div`
display: fixed;
width: 12vw;
height: 5vh;
/* line-height: 50px; */
font-weight: bold;
text-decoration: none;
background-image: linear-gradient(#F05A27, #F5931F);
text-align: center;
align-items: center;
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
    border: 3px solid #F5931F;
    background: transparent;
    color: #F05A27;
    cursor: pointer;
  }
`;

const Container = styled.div`

  margin-top: 50px;
  margin-bottom: 30px;
justify-content: center;
align-items: center;
margin-left: 40%;
font-size: 2vh;

`;

const Card = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10px;
margin-left: 10px
height: 10vw;
width: 25vw;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center;
text-align: center;
border: 5px solid rgb(27, 44, 77);
background-color: white;
border-radius: 20px;

&:hover {
  box-shadow: 0px 0px 15px 0px #848484;
}
`;

export default PaymentCard