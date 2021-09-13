import styled from "styled-components";
import React, { useState } from "react";

function PaymentCard({payment, setSelectedPayment}) {
    // const [selectedPayment, setSelectedPayment] = useState([])

    const select = () => {
        setSelectedPayment(payment)
    }

    return(
        <div>
            <Container>
        <Card>
        <h2>{payment.name_on_card}'s {payment.card_type}</h2>
        <h2>{payment.card_number}</h2>
        <h2>{payment.expiration} {payment.cvv}</h2>
        <button onClick={select}>Use this Payment Method</button>
        <br></br>
        </Card>
        </Container>
        </div>
    )
}

const Container = styled.div`

  margin-top: 50px;
  margin-bottom: 30px;
justify-content: center;
align-items: center;
margin-left: 40%;
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

&:hover {
  box-shadow: 0px 0px 15px 0px #848484;
}
`;

export default PaymentCard