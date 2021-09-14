import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import CheckoutItem from "./CheckoutItem"
import styled from "styled-components";
import CheckoutShipping from "./CheckoutShipping"
import CheckoutPayment from "./CheckoutPayment"
import OrderSummary from "./OrderSummary"
import Receipt from "./Receipt"

function Checkout({shoppingCart, clothes, electronics, tools, health, music, all, user, setShoppingCart, removeFromCart}){

    const id = useParams().id;
    const [cart, setCart] = useState([])
    const [summary, setSummary] = useState(true)
    const [shipping, setShipping] = useState(false);
    const [payment, setPayment] = useState(false);
    const [receipt, setReceipt] = useState(false);
    const [selectedShipping, setSelectedShipping] = useState([])
    const [selectedPayment, setSelectedPayment] = useState(null)

    useEffect(() => {
        fetch(`/shopping_carts/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setCart(data);
          });
      }, [id]);

      const clearCart = () => {
        shoppingCart.map(item => removeFromCart(item.id))
        setShoppingCart([])
      };

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      const tax = (num) => {
          return num * .04
      }

      const round = (num) => {
        return Math.round(num * 100) / 100
      }

      const toSummary = () => {
          setShipping(false)
          setPayment(false)
          setReceipt(false)
          setSummary(true)
      }

      const toShipping = () => {
          setSummary(false)
          setPayment(false)
          setReceipt(false)
          setShipping(true)
      }

      const toPayment = () => {
          setSummary(false)
          setShipping(false)
          setReceipt(false)
          setPayment(true)
      }

      const toReceipt = () => {
        setSummary(false)
        setShipping(false)
        setPayment(false)
        setReceipt(true)
        clearCart()
    }

      
      const userCartItems = shoppingCart.filter(item => 
        item.shopping_cart.id === cart.id)

        //CLOTHES

        const cartClothes = userCartItems.filter(item =>
            item.store.id === clothes.id)

            let clothesTotals = cartClothes.map((item) => (item.quantity * item.product.price))

            var totalClothesPrice = clothesTotals.reduce(function(prev, cur) {
              return prev + cur;
            }, 0);

            const clothesShipping = 4.99
            const clothesTax = tax(totalClothesPrice)
            const clothesTaxes = round(clothesTax)
            const finalClothesPrice = totalClothesPrice + clothesShipping + clothesTaxes

            //ELECTRONICS

            const cartElectronics = userCartItems.filter(item =>
                item.store.id === electronics.id)

                let electronicsTotals = cartElectronics.map((item) => (item.quantity * item.product.price))

                var totalElectronicsPrice = electronicsTotals.reduce(function(prev, cur) {
                  return prev + cur;
                }, 0);

                const electronicsShipping = 9.99
                const electronicsTax = tax(totalElectronicsPrice)
                const electronicsTaxes = round(electronicsTax)
                const finalElectronicsPrice = totalElectronicsPrice + electronicsShipping + electronicsTaxes

                //TOOLS

                const cartTools = userCartItems.filter(item =>
                    item.store.id === tools.id)

                    let toolsTotals = cartTools.map((item) => (item.quantity * item.product.price))

                    var totalToolsPrice = toolsTotals.reduce(function(prev, cur) {
                      return prev + cur;
                    }, 0);

                    const toolsShipping = 5.99
                    const toolsTax = tax(totalToolsPrice)
                    const toolsTaxes = round(toolsTax)
                    const finalToolsPrice = totalToolsPrice + toolsShipping + toolsTaxes

                    //HEALTH

                    const cartHealth = userCartItems.filter(item =>
                        item.store.id === health.id)

                        let healthTotals = cartHealth.map((item) => (item.quantity * item.product.price))

                        var totalHealthPrice = healthTotals.reduce(function(prev, cur) {
                          return prev + cur;
                        }, 0);

                        const healthShipping = 2.99
                        const healthTax = tax(totalHealthPrice)
                        const healthTaxes = round(healthTax)
                        const finalHealthPrice = totalHealthPrice + healthShipping + healthTaxes

                        //MUSIC

                        const cartMusic = userCartItems.filter(item =>
                            item.store.id === music.id)

                            let musicTotals = cartMusic.map((item) => (item.quantity * item.product.price))

                            var totalMusicPrice = musicTotals.reduce(function(prev, cur) {
                              return prev + cur;
                            }, 0);

                            const musicShipping = 14.99
                            const musicTax = tax(totalMusicPrice)
                            const musicTaxes = round(musicTax)
                            const finalMusicPrice = totalMusicPrice + musicShipping + musicTaxes

                            //ALL

                            const cartAll = userCartItems.filter(item =>
                                item.store.id === all.id)

                                let allTotals = cartAll.map((item) => (item.quantity * item.product.price))

                                var totalAllPrice = allTotals.reduce(function(prev, cur) {
                                  return prev + cur;
                                }, 0);

                                const allShipping = 0.00
                                const allTax = tax(totalAllPrice)
                                const allTaxes = round(allTax)
                                const finalAllPrice = totalAllPrice + allShipping + allTaxes

                                const grandTotal = numberWithCommas(round(finalClothesPrice + finalElectronicsPrice + finalToolsPrice + finalHealthPrice + finalMusicPrice + finalAllPrice))

    return(
        <div>
            {receipt ? null : <OrderSummary grandTotal={grandTotal} selectedShipping={selectedShipping} selectedPayment={selectedPayment} toReceipt={toReceipt} setShoppingCart={setShoppingCart}
         
            />}
            {summary ? 
            <div>
                <Header>
        <Summary>Your Order</Summary>
        </Header>
        <div>
        {cartClothes.length > 0 ?
        <Container>
        <Clothes>{clothes.name.toUpperCase()}</Clothes>
        {cartClothes.map(item => (
          <CheckoutItem
            key={item.id}
            item={item}
          />
        ))}
        <TotalContainer>
            <Small>
        <Shipping>Shipping: ${clothesShipping}</Shipping>
        <Taxes>Taxes: ${clothesTaxes}</Taxes>
            </Small>
        <Total>{clothes.name} Total: ${numberWithCommas(round(finalClothesPrice))}</Total>
        </TotalContainer>
        </Container> : null }

        {cartElectronics.length > 0 ?
        <Container>
        <Electronics>{electronics.name.toUpperCase()}</Electronics>
        {cartElectronics.map(item => (
          <CheckoutItem
            key={item.id}
            item={item}
          />
        ))}
     <TotalContainer>
            <Small>
        <Shipping>Shipping: ${electronicsShipping}</Shipping>
        <Taxes>Taxes: ${electronicsTaxes}</Taxes>
            </Small>
        <Total>{electronics.name} Total: ${numberWithCommas(round(finalElectronicsPrice))}</Total>
        </TotalContainer>
        </Container> : null }

        {cartTools.length > 0 ?
        <Container>
        <Tools className="font-link">{tools.name.toUpperCase()}</Tools>
        {cartTools.map(item => (
          <CheckoutItem
            key={item.id}
            item={item}
          />
        ))}
     <TotalContainer>
            <Small>
        <Shipping>Shipping: ${toolsShipping}</Shipping>
        <Taxes>Taxes: ${toolsTaxes}</Taxes>
            </Small>
        <Total>{tools.name} Total: ${numberWithCommas(round(finalToolsPrice))}</Total>
        </TotalContainer>
        </Container> : null }

        {cartHealth.length > 0 ?
        <Container>
        <Health>{health.name.toUpperCase()}</Health>
        {cartHealth.map(item => (
          <CheckoutItem
            key={item.id}
            item={item}
          />
        ))}
     <TotalContainer>
            <Small>
        <Shipping>Shipping: ${healthShipping}</Shipping>
        <Taxes>Taxes: ${healthTaxes}</Taxes>
            </Small>
        <Total>{health.name} Total: ${numberWithCommas(round(finalHealthPrice))}</Total>
        </TotalContainer>        
        </Container> : null }

        {cartMusic.length > 0 ?
        <Container>
        <Music className="guitar">{music.name}</Music>
        {cartMusic.map(item => (
          <CheckoutItem
            key={item.id}
            item={item}
          />
        ))}
     <TotalContainer>
            <Small>
        <Shipping>Shipping: ${musicShipping}</Shipping>
        <Taxes>Taxes: ${musicTaxes}</Taxes>
            </Small>
        <Total>{music.name} Total: ${numberWithCommas(round(finalMusicPrice))}</Total>
        </TotalContainer>        
        </Container> : null }

        {cartAll.length > 0 ?
        <Container>
        <All>{all.name.toLowerCase()}</All>
        {cartAll.map(item => (
          <CheckoutItem
            key={item.id}
            item={item}
          />
        ))}
     <TotalContainer>
            <Small>
        <Shipping>Shipping: ${allShipping}</Shipping>
        <Taxes>Taxes: ${allTaxes}</Taxes>
            </Small>
        <Total>{all.name} Total: ${numberWithCommas(round(finalAllPrice))}</Total>
        </TotalContainer>        
        </Container> : null }
        </div>
        <CartTotal>Total: {grandTotal}</CartTotal>
        <Button onClick={toShipping}>Continue to Shipping</Button>
        </div>
        : null }

        {shipping ? 
        <CheckoutShipping toSummary={toSummary} toPayment={toPayment} user={user} selectedShipping={selectedShipping} setSelectedShipping={setSelectedShipping}/>
    : null}

        {payment ? 
        <CheckoutPayment toShipping={toShipping} user={user} setSelectedPayment={setSelectedPayment}/>
    : null}

        {receipt ? 
        <Receipt user={user} clothes={clothes} cartClothes={cartClothes} electronics={electronics} cartElectronics={cartElectronics} tools={tools} cartTools={cartTools}
        health={health} cartHealth={cartHealth} music={music} cartMusic={cartMusic} all={all} cartAll={cartAll}/>
    : null}
        </div>
        
    )
}

const Container = styled.div`
margin-bottom: 20vh;
`;

const Button = styled.button`

align-items: center;
justify-content: center;
margin-top: 3%;
margin-bottom: 3%;
margin-left: 40%;
height: 10vh;
width: 25vh;
`;

const Header = styled.div`
// background-image: linear-gradient(#F05A27, #F5931F);
// height: 4vw;
// border-bottom: 4px solid rgb(27, 44, 77);
// box-shadow: 0px 0px 15px 0px #848484;
margin-bottom: 3%;
`

const Summary = styled.div`
font-size: 3vw;
font-weight: 500;
margin-left: 5%;
font-family: 'Dosis', sans-serif;
`;

const CartTotal = styled.div`
font-size: 2vw;
float: right;
font-weight: bold;
margin-right: 15%;
margin-top: 5vh;
border-top: 4px solid rgb(27, 44, 77)
`;

const Total = styled.div`
font-size: 1.5vw;
font-weight: bold;
// float: right;
// margin-bottom: 5vh;
margin-right: 25%;
// display: grid;
// row-gap: 0;
`;

const TotalContainer = styled.div`

float: right;
// margin-bottom: 5vh;
margin-right: 20vw;
display: grid;
row-gap: 1ch;
`;

const Small = styled.div`
float: right;
// margin-bottom: 5vh;
// margin-right: 15%;
display: grid;
// grid-row-gap: 0;
`;

const Shipping = styled.div`
font-size: 1vw;
font-weight: bold;
float: right;
// margin-bottom: 5vh;
// margin-right: 15%;
`;

const Taxes = styled.div`
font-size: 1vw;
font-weight: bold;
float: right;
// margin-bottom: 5vh;
// margin-right: 15%;
`;

const Clothes = styled.div`
font-family: "Sans-Serif"; "Optima";
font-size: 2vw;
color: #002A5A;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;
`;

const Electronics = styled.div`
font-family: "Impact"; "Fantasy"; 
font-size: 2vw;
color: #EEE416;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;

`;

const Tools = styled.div`
font-size: 2vw;
color: #F96302;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;

`;

const Health = styled.div`
font-family: Helvetica, sans-serif;
font-size: 2vw;
color: #C60401;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;

`;

const Music = styled.div`
font-size: 2vw;
color: #062F1C;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;

`;

const All = styled.div`
font-size: 2vw;
color: #C60401;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;

`;

export default Checkout