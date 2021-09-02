import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import {useHistory} from "react-router";

const StorePage = ({ products, selectedStore, fromMain, setFromMain, backBtn, selectedProduct, setSelectedProduct, isLoading }) => {
    //   const [currentPage, setCurrentPage] = useState(0);
    const [ search, setSearch ] = useState('')
    let history = useHistory();

    const storeProducts = products.filter(product => 
        product.store.id === selectedStore.id)
    
    const handleChange = (e) => {
      setSearch(e.target.value)
    }
    const searchProducts = storeProducts.filter(product => 
      product.name.toLowerCase().includes(search.toLowerCase())
    ); 


    
      return (
        <div>
            <Form >
            <Card 
                onClick={backBtn}>
                <h2>{!fromMain ? 'Back to Browse' : 'Back to Home'}</h2>
            </Card>
                    <input onChange={handleChange} className="loginForm"
                     id="searchbox" type="text" placeholder="Search Products"/>
                </Form>
                {/* <div>
          
                <br></br>
                </div>
            <div>
                <div>
                <h1>Shop by Store</h1>
                <br></br>
                </div>
                <Container>
    
        <br></br>
        <Card1 key={stores[0].id} 
        //   as={Link} to={src}
        >
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
            <h2>{stores[4].name}</h2>
        </Card5>
        <br></br>
        <Card6 key={stores[5].id} 
        //   as={Link} to={src}
        >
            <h2>{stores[5].name.toLowerCase()}</h2>
        </Card6>
        <br></br>
        </Container>
            </div> */}
          
    <div>
{isLoading ? <h2>Loading Products</h2> : 
    <Container>

            {searchProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                // handleAddCart={handleAddCart}
              />
            ))}
            </Container>
}
</div>
        </div>
      );
    };

    const Container = styled.div`
  margin-left: 0%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 2vh;
  width: 100%;
`;

const Form = styled.form `
    color: white;
    font-family: Andale Mono, monospace;
    font-size: 2em;
    margin:auto;
    padding:auto;
    width:50%;
    display:flex;
    flex-direction:column;
    input{
        width: 100%;
        position: relative;
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: calc(1px + 1vw);
        font-weight: 700;
        color: black;
        letter-spacing: 0.02em;
        text-shadow: 0 0 0.15em #grey;
        user-select: none;
        white-space: nowrap;
        filter: blur(0.007em);
        border-radius:10px;
        margin-top:50px

    }
    textarea{
        width: 100%;
        position: relative;
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: calc(1px + 1vw);
        font-weight: 700;
        color: black;
        letter-spacing: 0.02em;
        text-shadow: 0 0 0.15em #grey;
        user-select: none;
        white-space: nowrap;
        filter: blur(0.007em);
        border-radius:10px;
        
    }
    input[type=submit]{
        font-family: 'Monospace'; 
        font-size: large;
        background-color:#black;
        color:navy;
    }`

    const Card = styled.div`
height: 2.5vw;
width: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background-color: #7F55D0;
  border-radius: 20px;
    font-family: "Sans-Serif"; "Optima";
    font-weight: heavier;
    font-size: .5em;
    color: beige;
  &:hover {
    box-shadow: 15px 15px 15px 15px #848484;
    background-image: url(https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif); width: 5vw; height: 2.5vw;
    background-position: 50% 50%;
    cursor: pointer;
    border: 6px solid #7F55D0;
    text-shadow: 2px 2px 8px #7F55D0;
    color: silver;
  }
`;

    export default StorePage;