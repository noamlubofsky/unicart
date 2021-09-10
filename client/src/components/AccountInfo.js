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
        // fetch(`/account_infos/${id}`)
        // .then((res) => res.json())
        // .then((data) => {
        //   setInfo(data);
        // });
      };

      const editInfo = () => {
          setEdit(!edit)
        //      fetch(`/account_infos/${id}`)
        // .then((res) => res.json())
        // .then((data) => {
        //   setInfo(data);
        // });
      }

    return(
        <div>
        {edit ?
    <div>
    <h1>Account Info:</h1>
    <form onSubmit={handleSubmit}>
    <h2>First Name: <input type="text" value={first} onChange={(e) => setFirst(e.target.value)}></input></h2>
    <h2>Last Name: <input type="text" value={last} onChange={(e) => setLast(e.target.value)}></input></h2>
    <h2>Email Address: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input></h2>
    <span>
    <button type="submit">Save Info</button>
    <button onClick={editInfo}>Cancel Editing</button>
    </span>
    </form>
    <br></br>
    </div>
        : 
        <div>
        <h1>Account Info:</h1>
        <h2>First Name: {info.first_name}</h2>
        <h2>Last Name: {info.last_name}</h2>
        <h2>Email Address: {info.email}</h2>
        <button onClick={editInfo}>Edit Info</button>
        <br></br>
        </div>
        
        }
        </div>
    )
}

export default AccountInfo;