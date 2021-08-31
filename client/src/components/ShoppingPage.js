import React from "react";
import styled from 'styled-components';
import StoreCard from "./StoreCard"

function ShoppingPage({stores}) {
    return(
        <div>
            <h1>Shop by Store</h1>
            {/* {stores.map(store => (
                <StoreCard store={store}/>
            ))} */}
    <Card1 key={stores[0].id} 
    //   as={Link} to={src}
    >
                {/* <Image src="https://fontslogo.com/wp-content/uploads/2013/06/Home-Depot-Logo-Font.jpg" alt="Product" /> */}

        <h2>{stores[0].name.toUpperCase()}</h2>
    </Card1>
    <br></br>
    <Card2 key={stores[1].id} 
    //   as={Link} to={src}
    >
        <h2>{stores[1].name.toUpperCase()}</h2>
    </Card2>
    <br></br>
    <Card3 key={stores[2].id} 
    //   as={Link} to={src}
    >
        <h2>{stores[2].name.toUpperCase()}</h2>
    </Card3>
    <br></br>
    <Card4 key={stores[3].id} 
    //   as={Link} to={src}
    >
        <h2>{stores[3].name.toUpperCase()}</h2>
    </Card4>
    <br></br>
    <Card5 key={stores[4].id} 
    //   as={Link} to={src}
    >
        <h2>{stores[4].name.toUpperCase()}</h2>
    </Card5>
    <br></br>
    <Card6 key={stores[5].id} 
    //   as={Link} to={src}
    >
        <h2>{stores[5].name}</h2>
    </Card6>
    <br></br>
        </div>
    )
}

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Card1 = styled.div`
  height: 5vw;
  width: 30vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 3px solid black;
  background-color: navy;
  border-radius: 20px;
    font-family: "Sans-Serif"; "Optima";
    font-weight: heavier;
    color: white;
  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;

const Card2 = styled.div`
  height: 5vw;
  width: 30vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 3px solid navy;
  background-color: yellow;
  border-radius: 20px;
  font-family: "Impact"; "Fantasy"; 
  font-weight: 5000;


  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;

const Card3 = styled.div`
  height: 5vw;
  width: 30vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 3px solid black;
  background-color: orange;
  border-radius: 20px;
  font-family: "Stencil Std"; "fantasy"; 
  color: white;
  font-weight: heavier;

  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;

const Card4 = styled.div`
  height: 5vw;
  width: 30vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 3px solid red;
  background-color: white;
  border-radius: 20px;
font-family: Helvetica, sans-serif;
font-weight: 600;
color: red;
  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;

const Card5 = styled.div`
  height: 5vw;
  width: 30vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 3px solid maroon;
  background-color: beige;
  border-radius: 20px;
  font-family: "Fantasy"; "Blippo";
  color: maroon;	
  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;

const Card6 = styled.div`
  height: 5vw;
  width: 30vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid transparent;
  background-color: red;
  border-radius: 20px;
color: white;
  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;

export default ShoppingPage