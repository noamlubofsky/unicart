function PaymentInfo() {
    return(
        <div>
    <h1>Payment Info:</h1>
    <h2>Card Type: <input type="text"></input> </h2>
    <h2>Card Number: <input type="text"></input> </h2>
    <h2>Expiration: <input type="text"></input> </h2>
    <h2>CVV: <input type="text"></input> </h2>
    <button type="submit">Save Info</button>

    <br></br>
    </div>
    )
}

export default PaymentInfo;