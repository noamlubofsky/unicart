import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Receipt({user, clothes, cartClothes, electronics, cartElectronics, tools, cartTools, health, cartHealth, music, cartMusic, all, cartAll}){
    const [info, setInfo] = useState([])
    const id = useParams().id;

    useEffect(() => {
        fetch(`/account_infos/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setInfo(data)
          });
      }, [id]);

    return(
        <Container>
        <h1>Thank you, {user.username}!</h1>
        <h1>✔️ Your Order on behalf of the following stores has been placed:</h1>
        <Stores>
        {cartClothes.length > 0 ? <h2>{clothes.name}</h2> : null}
        {cartElectronics.length > 0 ? <h2>{electronics.name}</h2> : null}
        {cartTools.length > 0 ? <h2>{tools.name}</h2> : null}
        {cartHealth.length > 0 ? <h2>{health.name}</h2> : null}
        {cartMusic.length > 0 ? <h2>{music.name}</h2> : null}
        {cartAll.length > 0 ? <h2>{all.name}</h2> : null}
        </Stores>
        {info ? <h2>A confirmation email has been sent to {info.email}</h2> : <h2>No email address associated with this account - You can change this in your account settings</h2>}
        <h2>Have a Great Day!</h2>
        </Container>
    )
}

const Container = styled.div`
margin-left: 5%;
margin-top: 2%;
margin-bottom: 450px;
width: 60%;
height: 60%;
border-radius: 10px;
border: 8px solid #058C0B;
background-color: #C7E9C6;
`;

const Stores = styled.div`
margin-left: 10%
`;

export default Receipt;