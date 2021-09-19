import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function ShippingInfo({user}){
    const [shipping, setShipping] = useState([])
    const [shipTo, setShipTo] = useState(null)
    const [address, setAddress] = useState(null)
    const [address2, setAddress2] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [zip, setZip] = useState(null)
    const [edit, setEdit] = useState(false)
    const id = useParams().id;

    useEffect(() => {
        fetch(`/shipping_infos/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setShipping(data);
          });
      }, [id]);

    const createShippingInfo = (shipTo, address, address2, city, state, zip) => {
        fetch("/shipping_infos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ship_to: shipTo,
            address: address,
            address_2: address2,
            city: city,
            state: state,
            zip: zip,
            user_id: user.id,
          }),
        })
          .then((response) => response.json())
        .then(editInfo)
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        createShippingInfo(shipTo, address, address2, city, state, zip);
        fetch(`/shipping_infos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setShipping(data);
        });
      };

      const editInfo = () => {
          setEdit(!edit)
             fetch(`/shipping_infos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setShipping(data);
        });
      }

    return(
        <div>
            {edit ? 
        <div>
    <h1>Shipping Info:</h1>
    <form onSubmit={handleSubmit}>
    <h2>Ship To: <input required type="text" value={shipTo} placeholder={shipping ? shipping.ship_to : null} onChange={(e) => setShipTo(e.target.value)}></input> </h2>
    <h2>Address: <input required type="text" value={address} placeholder={shipping ? shipping.address : null} onChange={(e) => setAddress(e.target.value)}></input> </h2>
    <h2>Address Line 2: <input type="text" value={address2} placeholder={shipping ? shipping.address_2 : null} onChange={(e) => setAddress2(e.target.value)}></input> </h2>
    <h2>City: <input required type="text" value={city} placeholder={shipping ? shipping.city : null} onChange={(e) => setCity(e.target.value)}></input> </h2>
    <h2>State: <input required type="text" value={state} placeholder={shipping ? shipping.state : null} onChange={(e) => setState(e.target.value)}></input> </h2>
    <h2>Zip Code: <input required type="text" value={zip} placeholder={shipping ? shipping.zip : null} onChange={(e) => setZip(e.target.value)}></input> </h2>
    <span>
    <SubmitButton type="submit">Save Info</SubmitButton>
    <Button onClick={editInfo}>Cancel Editing</Button>
    </span>
    </form>
    <br></br>
    </div>
        : 
        <div>
    <h1>Shipping Info:</h1>
    <h2>Ship To: {shipping ? shipping.ship_to : null} </h2>
    <h2>Address: {shipping ? shipping.address : null} </h2>
    <h2>Address Line 2: {shipping ? shipping.address_2 : null} </h2>
    <h2>City: {shipping ? shipping.city : null} </h2>
    <h2>State: {shipping ? shipping.state : null} </h2>
    <h2>Zip Code: {shipping ? shipping.zip : null} </h2>
    <Button onClick={editInfo}>Change Default Shipping</Button>
    <br></br>
    </div>
        }
    </div>
    )
}

const SubmitButton = styled.button.attrs({ 
  type: 'submit',
  value: 'Submit'
})`
display: fixed;
margin-top: 1%;
margin-left: 1%;
width: 8vw;
height: 6vh;
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
    width: 10vw;
    border: 3px solid #F5931F;
    background: transparent;
    color: #F05A27;
    cursor: pointer;
  }
`;

const Button = styled.button`
display: fixed;
margin-top: 1%;
margin-left: 1%;
width: 8vw;
height: 6vh;
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
    width: 10vw;
    border: 3px solid #F5931F;
    background: transparent;
    color: #F05A27;
    cursor: pointer;
  }
`;

export default ShippingInfo;