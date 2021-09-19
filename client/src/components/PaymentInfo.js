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
    <h2>Card Type: <input required type="text" value={type} placeholder={payment ? payment.card_typepayment : null} onChange={(e) => setType(e.target.value)}></input> </h2>
    <h2>Name on Card: <input required type="text" value={name} placeholder={payment ? payment.name_on_card : null} onChange={(e) => setName(e.target.value)}></input> </h2>
    <h2>Card Number: <input required type="text" value={number} placeholder={payment ? payment.card_number : null} onChange={(e) => setNumber(e.target.value)}></input> </h2>
    <h2>Expiration: <input required type="text" value={expiration} placeholder={payment ? payment.expiration : null} onChange={(e) => setExpiration(e.target.value)}></input> </h2>
    <h2>CVV: <input required type="text" value={cvv} placeholder={payment ? payment.cvv : null} onChange={(e) => setCvv(e.target.value)}></input> </h2>
    <span> 
    <SubmitButton type="submit">Save Info</SubmitButton>
    <Button onClick={editInfo}>Cancel Editing</Button>
    </span>
    </form>
    <br></br>
    </div>
        : 
        <div>
        <h1>Payment Info:</h1>
        <h2>Card Type: {payment ? payment.card_type : null} </h2>
        <h2>Name on Card: {payment ? payment.name_on_card : null} </h2>
        <h2>Card Number: {payment ? payment.card_number : null} </h2>
        <h2>Expiration: {payment ? payment.expiration : null} </h2>
        <h2>CVV: {payment ? payment.cvv : null} </h2>
        <Button onClick={editInfo}>Change Default Payment</Button>
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

const Button = styled.div`
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

export default PaymentInfo;