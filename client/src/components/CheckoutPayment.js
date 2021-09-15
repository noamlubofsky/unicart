import React, { useEffect, useState } from "react";
import ShippingCard from "./ShippingCard"
import PaymentCard from "./PaymentCard"
import styled from "styled-components";

function CheckoutPayment({toShipping, user, selectedPayment, setSelectedPayment, clothes, cartClothes, electronics, cartElectronics, tools, cartTools, health, cartHealth, music, cartMusic, all, cartAll, toReceipt}) {
    const [payment, setPayment] = useState([])
    const [type, setType] = useState(null)
    const [name, setName] = useState(null)
    const [number, setNumber] = useState(null)
    const [expiration, setExpiration] = useState(null)
    const [cvv, setCvv] = useState(null)
    const [edit, setEdit] = useState(false)
    const [confirm, setConfirm] = useState(false)

    useEffect(() => {
        fetch(`/payment_infos`)
          .then((res) => res.json())
          .then((data) => {
            setPayment(data);
          });
      }, []);

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
        fetch(`/payment_infos`)
        .then((res) => res.json())
        .then((data) => {
          setPayment(data);
        });
      };

      const editInfo = () => {
          setEdit(!edit)
             fetch(`/payment_infos`)
        .then((res) => res.json())
        .then((data) => {
          setPayment(data);
        });
      }

    return(
        <div>
        <BackButton onClick={toShipping}>Back to Shipping</BackButton>
        {!selectedPayment ? <Header>Select Your Payment Method:</Header> : null}
        {confirm ? <ConfirmButton onClick={toReceipt}>
        <Confirm><h2>Confirm Oder to:</h2></Confirm>
        {cartClothes.length > 0 ? <h2>{clothes.name}</h2> : null}
        {cartElectronics.length > 0 ? <h2>{electronics.name}</h2> : null}
        {cartTools.length > 0 ? <h2>{tools.name}</h2> : null}
        {cartHealth.length > 0 ? <h2>{health.name}</h2> : null}
        {cartMusic.length > 0 ? <h2>{music.name}</h2> : null}
        {cartAll.length > 0 ? <h2>{all.name}</h2> : null}
        </ConfirmButton> 
        : null }

        {payment.map(payment => (
          <PaymentCard
            key={payment.id}
            payment={payment}
            setSelectedPayment={setSelectedPayment}
            setConfirm={setConfirm}
          />
        ))}
        {!edit ? <Button onClick={editInfo}>Use a Different Payment Method</Button> : null }
        {!edit ? null :  
            <div>
              <EditContainer>
    <h1>Payment Info:</h1>
    <form onSubmit={handleSubmit}>
    <h2>Card Type: <input required type="text" value={type} placeholder={payment ? payment.card_typepayment : null} onChange={(e) => setType(e.target.value)}></input> </h2>
    <h2>Name on Card: <input required type="text" value={name} placeholder={payment ? payment.name_on_card : null} onChange={(e) => setName(e.target.value)}></input> </h2>
    <h2>Card Number: <input required type="text" value={number} placeholder={payment ? payment.card_number : null} onChange={(e) => setNumber(e.target.value)}></input> </h2>
    <h2>Expiration: <input required type="text" value={expiration} placeholder={payment ? payment.expiration : null} onChange={(e) => setExpiration(e.target.value)}></input> </h2>
    <h2>CVV: <input required type="text" value={cvv} placeholder={payment ? payment.cvv : null} onChange={(e) => setCvv(e.target.value)}></input> </h2>
    <span> 
    <button type="submit">Add Payment Method</button>
    </span>
    </form>
    <br></br>
    </EditContainer>
    </div> }
        </div>
    )
}


const Header= styled.div`
font-size: 2vw;
font-weight: 500;
margin-left: 5%;
font-family: 'Dosis', sans-serif;
border-bottom: 4px solid rgb(27, 44, 77);
width: 23.3vw; 
margin-top: 3vh;
`;


const BackButton = styled.div`
display: fixed;
margin-top: 1%;
margin-left: 1%;
width: 12vw;
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
    width: 13vw;
    border: 3px solid #F5931F;
    background: transparent;
    color: #F05A27;
    cursor: pointer;
  }
`;

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

const ConfirmButton = styled.button`

width: 25vw;
height: 7vh;
justify-content: center;
align-items: center;
margin-left: 40%;
color: transparent;
margin-bottom: 10vh;
&:hover {
  width: 25vw;
    height: 40vh;
    border: 3px solid #F5931F;
    background: transparent;
    color: #F05A27;
    cursor: pointer;
`;

const Confirm = styled.div`
color: rgb(27, 44, 77);

`;

const EditContainer = styled.div`
margin-left: auto;
margin-right: auto;
width: 30em;
`;

export default CheckoutPayment