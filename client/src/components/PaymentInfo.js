import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function PaymentInfo({user}) {
    const [payment, setPayment] = useState([])
    const [type, setType] = useState(null)
    const [name, setName] = useState(null)
    const [number, setNumber] = useState(null)
    const [expiration, setExpiration] = useState(null)
    const [cvv, setCvv] = useState(null)
    const [edit, setEdit] = useState(false)
    const id = useParams().id;

    useEffect(() => {
        fetch(`/payment_infos/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setPayment(data);
          });
      }, [id]);

    const createPaymentInfo = (type, name, number, expiration, cvv) => {
        fetch("/payment_infos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            card_type: type,
            name_on_card: name,
            card_number: number,
            expiration: expiration,
            cvv: cvv,
            user_id: user.id,
          }),
        })
          .then((response) => response.json())
        //   .then((info) => setInfo(info))
        //   .then(console.log(info))
        .then(editInfo)
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        createPaymentInfo(type, name, number, expiration, cvv);
        fetch(`/payment_infos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPayment(data);
        });
      };

      const editInfo = () => {
          setEdit(!edit)
             fetch(`/payment_infos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPayment(data);
        });
      }
    return(
        <div>
            {edit ?
        <div>
    <h1>Payment Info:</h1>
    <form onSubmit={handleSubmit}>
    <h2>Card Type: <input type="text" value={type} onChange={(e) => setType(e.target.value)}></input> </h2>
    <h2>Name on Card: <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input> </h2>
    <h2>Card Number: <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}></input> </h2>
    <h2>Expiration: <input type="text" value={expiration} onChange={(e) => setExpiration(e.target.value)}></input> </h2>
    <h2>CVV: <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)}></input> </h2>
    <span> 
    <button type="submit">Save Info</button>
    <button onClick={editInfo}>Cancel Editing</button>
    </span>
    </form>
    <br></br>
    </div>
        : 
        <div>
        <h1>Payment Info:</h1>
        <h2>Card Type: {payment ? payment.card_typepayment : null} </h2>
        <h2>Name on Card: {payment ? payment.name_on_card : null} </h2>
        <h2>Card Number: {payment ? payment.card_number : null} </h2>
        <h2>Expiration: {payment ? payment.expiration : null} </h2>
        <h2>CVV: {payment ? payment.cvv : null} </h2>
        <button onClick={editInfo}>Edit Info</button>
        <br></br>
        </div> 
        }
    </div>
    )
}

export default PaymentInfo;