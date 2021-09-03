import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Review({review}) {

    const thanks = () => {
        alert("Thanks for the feedback!")
    }

    const sorry = () => {
        alert("Sorry :(")
    }
    return(
        <div>
            <ReviewContainer>
            <Reviewer><strong>{review.user.username}</strong> said:</Reviewer>
        <ReviewText>"{review.content}"</ReviewText>
        <Helpful>Was this review helpful? <button onClick={thanks}>YES</button><button onClick={sorry}>NO</button></Helpful>
        <Line></Line>
        </ReviewContainer>
        </div>
    )
}

const Reviewer = styled.div`
  margin-top: 20px;
  font-size: larger;
`;

const ReviewText = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 2em;
  font-style: italic;
`;

const Helpful = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: larger;
  font-weight: bold;
`;

const Line = styled.div`
  border-bottom: 4px solid rgb(47, 98, 104);

`

const ReviewContainer = styled.div`
margin-left: 10%;
width: 29%;
margin-bottom: 20px;
`;

export default Review;