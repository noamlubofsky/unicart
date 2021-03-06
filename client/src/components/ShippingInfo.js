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
    <button type="submit">Save Info</button>
    <button onClick={editInfo}>Cancel Editing</button>
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
    <button onClick={editInfo}>Change Default Shipping</button>
    <br></br>
    </div>
        }
    </div>
    )
}

export default ShippingInfo;