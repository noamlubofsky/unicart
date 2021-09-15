import styled from "styled-components";
import React, { useState } from "react";

function OrderSummary({grandTotal, selectedShipping, selectedPayment, toReceipt}) {
    // const [digits, setDigits] = useState('')

    // setDigits(selectedPayment.card_number)

    return(
        <Container>
            <Header>Order Summary:</Header>
            <h2>Total <small>(includes all tax and shipping)</small>:</h2>
            <h2>${grandTotal}</h2>
            <Line/>
            <h2>Ship To:</h2>
            <h3>{selectedShipping.ship_to}</h3>
            <h3>{selectedShipping.address} {selectedShipping.address_2}</h3>
            <h3>{selectedShipping.city} {selectedShipping.state} {selectedShipping.zip}</h3>
            <Line/>
            <h2>Payment Method:</h2>
            <h3>{selectedPayment ? `${selectedPayment.name_on_card}'s ${selectedPayment.card_type}` : null}</h3>
            <h3>{selectedPayment ? selectedPayment.card_number : null}</h3>
            <h3>{selectedPayment ? selectedPayment.expiration : null} {selectedPayment ? selectedPayment.cvv : null}</h3>
            {/* <Line/> */}
            {selectedPayment ? <Button onClick={toReceipt}>Confirm Order</Button> : null}
        </Container>
    )
}

const Button = styled.button`
align-items: center;
justify-content: center;
height: 5.3vh;
width: 15vw;
border-radius: 2px;
&:hover {
    width: 15vw;
    border: 3px solid #F5931F;
    background: transparent;
    cursor: pointer;
  }
`;

const Line = styled.div`
width: 100%;
border-bottom: 3px solid rgb(27, 44, 77)
`

const Header = styled.div`
background-image: linear-gradient(#F05A27, #F5931F);
height: 2vw;
font-size: 1.3vw;
font-weight: bold;
border-bottom: 4px solid rgb(27, 44, 77);
`

const Container = styled.div`
right: 0;
position: fixed;
// margin-right: 25px;
border: 3px solid rgb(27, 44, 77);
height: 58vh;
width: 15vw;
background-color: white;
text-align: center;
box-shadow: 0px 0px 15px 0px #848484;
font-size: .6vw;
font-family: 'Dosis', sans-serif;
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

export default OrderSummary