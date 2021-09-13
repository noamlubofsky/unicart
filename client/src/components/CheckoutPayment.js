import React, { useEffect, useState } from "react";
import ShippingCard from "./ShippingCard"
import PaymentCard from "./PaymentCard"

function CheckoutPayment({toShipping, user, setSelectedPayment}) {
    const [payment, setPayment] = useState([])
    const [type, setType] = useState(null)
    const [name, setName] = useState(null)
    const [number, setNumber] = useState(null)
    const [expiration, setExpiration] = useState(null)
    const [cvv, setCvv] = useState(null)
    const [edit, setEdit] = useState(false)

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
        <button onClick={toShipping}>Back to Shipping</button>
        <h1>Select Your Payment Method:</h1>
        {payment.map(payment => (
          <PaymentCard
            key={payment.id}
            payment={payment}
            setSelectedPayment={setSelectedPayment}
          />
        ))}
        {!edit ? <button onClick={editInfo}>Use a Different Payment Method</button> : null }
        {!edit ? null :  
            <div>
    <h1>Payment Info:</h1>
    <form onSubmit={handleSubmit}>
    <h2>Card Type: <input type="text" value={type} placeholder={payment ? payment.card_typepayment : null} onChange={(e) => setType(e.target.value)}></input> </h2>
    <h2>Name on Card: <input type="text" value={name} placeholder={payment ? payment.name_on_card : null} onChange={(e) => setName(e.target.value)}></input> </h2>
    <h2>Card Number: <input type="text" value={number} placeholder={payment ? payment.card_number : null} onChange={(e) => setNumber(e.target.value)}></input> </h2>
    <h2>Expiration: <input type="text" value={expiration} placeholder={payment ? payment.expiration : null} onChange={(e) => setExpiration(e.target.value)}></input> </h2>
    <h2>CVV: <input type="text" value={cvv} placeholder={payment ? payment.cvv : null} onChange={(e) => setCvv(e.target.value)}></input> </h2>
    <span> 
    <button type="submit">Add Payment Method</button>
    </span>
    </form>
    <br></br>
    </div> }
        </div>
    )
}

export default CheckoutPayment