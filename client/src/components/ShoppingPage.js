import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {useHistory} from "react-router";

function ShoppingPage({stores, toClothes, toElectronics, toTools, toHealth, toMusic, toAll, fromMain, setFromMain,
    clothes, electronics, tools, health, music, all}) {
    let history = useHistory();

    function main(){
        setFromMain(true)
        console.log(fromMain)
    }

    function toProducts(){
        history.push("/products")
      }

    return(
        <div>
    {/* <Card 
      onClick={toProducts}>

        <h2>Browse All Products</h2>
    </Card>
    <br></br> */}
      {/* <div>
    <h1>Shop by Store</h1>
    </div> */}
    <Container>
      
<br></br>
<Card1 key={clothes.id} onClick={() => {toClothes(); main()}}>
        <h2>{clothes.name.toUpperCase()}</h2>
    </Card1>
    <br></br>
    <Card2 key={electronics.id} onClick={() => {toElectronics(); main()}}
    >
        <h2>{electronics.name.toUpperCase()}</h2>
    </Card2>
    <br></br>
    <Card3 key={tools.id} onClick={() => {toTools(); main()}}
    >
        <h2 className="font-link">{tools.name.toUpperCase()}</h2>
    </Card3>
    <br></br>
    <Card4 key={health.id} onClick={() => {toHealth(); main()}}
    >
        <h2>{health.name.toUpperCase()}</h2>
    </Card4>
    <br></br>
    <Card5 key={music.id} onClick={() => {toMusic(); main()}}
    >
        <h2 className="guitar">{music.name}</h2>
    </Card5>
    <br></br>
    <Card6 key={all.id} onClick={() => {toAll(); main()}}
    >
        <h2>{all.name.toLowerCase()}</h2>
    </Card6>
<br></br>
</Container>
        </div>
    )
}

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;


const Container = styled.div`
//   margin-left: auto;
//   margin-right: 70px;
//   margin-top: 50px;
  display: grid;
  grid-template-columns: 10vw 20vw 10vw 20vw 10vw 20vw;
//   grid-row-gap: 2vh;
  width: 100%;
`;

const Card = styled.div`
height: 5vw;
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 3px solid black;
  background-color: #2E6268;
  // border-radius: 20px;
  font-family: sans-serif; 
    font-weight: heavier;
    font-size: 2em;
    color: beige;
    user-select: none;
    transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://media0.giphy.com/media/26AHMBTzc1qJgFfDW/giphy.gif); width: 100%; height: 5vw;
    // background-image: url(https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif); width: 100%; height: 10vw;
    background-position: 50% 50%;
    cursor: pointer;
    border: 6px solid #7F55D0;
    text-shadow: 2px 2px 8px #7F55D0;
    color: silver;
  }
`;

const Card1 = styled.div`
  height: 10vw;
  width: 20vw;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background-color: #002A5A;
  border-radius: 20px;
    font-family: "Sans-Serif"; "Optima";
    font-size: 1.5vw;
    text-align: center;
    color: white;
    user-select: none;
    transition: box-shadow .3s;
 
  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://thumbs.gfycat.com/BlueUnpleasantDassierat-max-1mb.gif); width: 20vw; height: 10vw;
    background-position: top;
    cursor: pointer;
    color: black;
    border: 6px solid black;
    text-shadow: 2px 2px 8px #B8E3EB;
}
`;

const Card2 = styled.div`
  height: 10vw;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #EEE416;
  background-color: #0345BE;
  color: #EEE416;
  border-radius: 20px;
  font-family: "Impact"; "Fantasy"; 
  font-weight: 5000;
  font-size: 2.5vw;
  text-align: center;
  user-select: none;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://media4.giphy.com/media/pOEbLRT4SwD35IELiQ/giphy.gif);width: 20vw; height: 10vw;
    background-position: center;
    background-size: cover;
    color: #EEE416;
    cursor: pointer;
    border: 6px solid #EEE416;
    text-shadow: 2px 2px 8px #0345BE;
  }
`;

const Card3 = styled.div`
  height: 10vw;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background-color: #F96302;
  border-radius: 20px;
  color: white;
  font-weight: heavier;
  font-size: 3vw;
  text-align: center;
  user-select: none;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://book.giflingua.com/images/origin/tols.gif);
    background-size: 25vw 15vw;
    background-position: 50% 46%;
    border: 6px solid black;
    color: #F96302;
    cursor: pointer;
    text-shadow: 2px 2px 8px black;


  }
`;

const Card4 = styled.div`
  height: 10vw;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #C60401;
  background-color: #B8E3EB;
  border-radius: 20px;
font-family: Helvetica, sans-serif;
font-weight: 600;
color: #C60401;
font-size: 5vw;
  text-align: center;
  text-position: center;
  user-select: none;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://i1.wp.com/supermed.pro/img/gif/super8.gif);width: 20vw; height: 10vw;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    border: 6px solid #C60401;
    text-shadow: 2px 2px 8px #B8E3EB;

  }
`;

const Card5 = styled.div`
  height: 10vw;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #062F1C;
  background-color: #5A5250;
  border-radius: 20px;
  color: #062F1C;
  font-size: 2.5vw;
  text-align: center;	
  user-select: none;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    // background-image: url(https://i.pinimg.com/originals/e2/12/7b/e2127b452438f766fab14c1480aebd0f.gif);width: 20vw; height: 10vw;
    // background-position: 100% 30%;
    background-image: url(https://thumbs.gfycat.com/BraveUnknownLemming-max-1mb.gif);width: 20vw; height: 10vw;
    background-position: 100% -40%;
    background-size: cover;
    cursor: pointer;
    border: 6px solid #014D00;
    color: #014D00;
    text-shadow: 2px 2px 8px #F2047D;
  }
`;

const Card6 = styled.div`
  height: 10vw;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  background-color: #B90101;
  border-radius: 20px;
  font-size: 2vw;
  text-align: center;
color: white;
user-select: none;
transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://cdn.dribbble.com/users/1170232/screenshots/3276234/target_logo.gif);width: 20vw; height: 10vw;
    background-position: 100% 15%;
    background-size: cover;
    cursor: pointer;
    color: black;
    border: 6px solid #B90101;
    text-shadow: 2px 2px 8px #B90101;
  }
`;

export default ShoppingPage