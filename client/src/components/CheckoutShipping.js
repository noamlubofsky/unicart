import React, { useEffect, useState } from "react";
import ShippingCard from "./ShippingCard"
import styled from "styled-components";

function CheckoutShipping({toSummary, toPayment, user, setSelectedShipping}) {
    const [shipping, setShipping] = useState([])
    const [shipTo, setShipTo] = useState(null)
    const [address, setAddress] = useState(null)
    const [address2, setAddress2] = useState(null)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [zip, setZip] = useState(null)
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        fetch(`/shipping_infos`)
          .then((res) => res.json())
          .then((data) => {
            setShipping(data);
          });
      }, []);

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
        fetch(`/shipping_infos`)
        .then((res) => res.json())
        .then((data) => {
          setShipping(data);
        });
      };

      const editInfo = () => {
          setEdit(!edit)
             fetch(`/shipping_infos`)
        .then((res) => res.json())
        .then((data) => {
          setShipping(data);
        });
      }

    return(
        <div>
        <button onClick={toSummary}>Back to Order Summary</button>

        <h1>Select Your Shipping Address</h1>
        {shipping.map(address => (
          <ShippingCard
            key={address.id}
            address={address}
            toPayment={toPayment}
            setSelectedShipping={setSelectedShipping}
          />
        ))}
        {!edit ? <Button onClick={editInfo}>Add New Shipping Address</Button> : null }


        {!edit ? null :  
        <div>
    <h1>New Shipping Info:</h1>
    <form onSubmit={handleSubmit}>
    <h2>Ship To: <input type="text" value={shipTo} placeholder={shipping ? shipping.ship_to : null} onChange={(e) => setShipTo(e.target.value)}></input> </h2>
    <h2>Address: <input type="text" value={address} placeholder={shipping ? shipping.address : null} onChange={(e) => setAddress(e.target.value)}></input> </h2>
    <h2>Address Line 2: <input type="text" value={address2} placeholder={shipping ? shipping.address_2 : null} onChange={(e) => setAddress2(e.target.value)}></input> </h2>
    <h2>City: <input type="text" value={city} placeholder={shipping ? shipping.city : null} onChange={(e) => setCity(e.target.value)}></input> </h2>
    <h2>State: <input type="text" value={state} placeholder={shipping ? shipping.state : null} onChange={(e) => setState(e.target.value)}></input> </h2>
    <h2>Zip Code: <input type="text" value={zip} placeholder={shipping ? shipping.zip : null} onChange={(e) => setZip(e.target.value)}></input> </h2>
    <span>
    <button type="submit">Add Address</button>
    {/* <button onClick={editInfo}>Cancel Editing</button> */}
    </span>
    </form>
    <br></br>
    </div> }
        </div>
    )
}

const Button = styled.button`

  height: 5vw;
  width: 25vw;
justify-content: center;
align-items: center;
margin-left: 40%;
margin-bottom: 10vh;
&:hover {
    width: 25vw;
    // height: 3vw;
    border: 3px solid #F5931F;
    background: transparent;
    color: #F05A27;
    cursor: pointer;
`;

export default CheckoutShipping