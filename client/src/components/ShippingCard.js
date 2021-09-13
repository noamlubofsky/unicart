import styled from "styled-components";
import React, { useState } from "react";


function ShippingCard({address, toPayment, setSelectedShipping}) {
    // const [selectedShipping, setSelectedShipping] = useState([])

    const select = () => {
        setSelectedShipping(address)
        toPayment()
    }

    console.log(address)

    return(
        <div>
            <Container>
        <AddressCard>
        <h2>{address.ship_to}</h2>
        <h2>{address.address} {address.address_2}</h2>
        <h2>{address.city}, {address.state} {address.zip}</h2>
        <button onClick={select}>Use this Address</button>
        <br></br>
        </AddressCard>
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

const AddressCard = styled.div`
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

export default ShippingCard