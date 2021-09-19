import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function AccountInfo({user}) {
    const [info, setInfo] = useState([])
    const [first, setFirst] = useState(null)
    const [last, setLast] = useState(null)
    const [email, setEmail] = useState(null)
    const [edit, setEdit] = useState(false)
    const id = useParams().id;

    useEffect(() => {
        fetch(`/account_infos/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setInfo(data);
          });
      }, [id]);

    const createAccountInfo = (first, last, email) => {
        fetch("/account_infos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: first,
            last_name: last,
            email: email,
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
        createAccountInfo(first, last, email);
        fetch(`/account_infos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setInfo(data);
        });
      };

      const editInfo = () => {
          setEdit(!edit)
             fetch(`/account_infos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setInfo(data);
        });
      }

    return(
        <div>
        {edit ?
    <div>
    <h1>Account Info:</h1>
    <form onSubmit={handleSubmit}>
    <h2>First Name: <input type="text" value={first} placeholder={info ? info.first_name : null} onChange={(e) => setFirst(e.target.value)}></input></h2>
    <h2>Last Name: <input type="text" value={last} placeholder={info ? info.last_name : null} onChange={(e) => setLast(e.target.value)}></input></h2>
    <h2>Email Address: <input type="text" value={email} placeholder={info ? info.email : null} onChange={(e) => setEmail(e.target.value)}></input></h2>
    <span>
    <SubmitButton type="submit">Save Info</SubmitButton>
    <Button onClick={editInfo}>Cancel Editing</Button>
    </span>
    </form>
    <br></br>
    </div>
        : 
        <div>
        <h1>Account Info:</h1>
        <h2>First Name: {info ? info.first_name : null}</h2>
        <h2>Last Name: {info ? info.last_name : null}</h2>
        <h2>Email Address: {info ? info.email : null}</h2>
        <Button onClick={editInfo}>Edit Account Info</Button>
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

const Button = styled.button`
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


export default AccountInfo;