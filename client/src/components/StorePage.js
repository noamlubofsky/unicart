import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import {useHistory} from "react-router";

const StorePage = ({ products, selectedStore, fromMain, setFromMain, backBtn, selectedProduct, setSelectedProduct, isLoading, clothes, electronics, tools, health, music, all}) => {
    const [ search, setSearch ] = useState('')
    const [sortBy, setSortBy] = useState('')
    const [toDisplay, setToDisplay] = useState([])

    let history = useHistory();

    const storeProducts = products.filter(product => 
        product.store.id === selectedStore.id)
    
    const handleChange = (e) => {
      setSearch(e.target.value)
    }
    const searchProducts = storeProducts.filter(product => 
      product.name.toLowerCase().includes(search.toLowerCase())
    );

  //   useEffect(() => {
  //   const shuffled = storeProducts.sort(() => 0.5 - Math.random());
  //   let selected = shuffled.slice(0, 3);
  //   setRandom(selected)
  //   console.log(random)
  // }, [])

    useEffect(() => {
      if(sortBy === 'Alphabetically'){
       const sortedProducts = sortByName()
       setToDisplay(sortedProducts)
      }else{
        const sortedProducts = sortByPrice()
        setToDisplay(sortedProducts)
      }
    }, [sortBy])
    
    const sortByName = () => {
      return[...searchProducts].sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }
    
    const sortByPrice = () => {
      return[...searchProducts].sort(function (a, b) {
        return a.price - b.price;
      });
    }
    
    const sortProducts = (e) => {
      setSortBy(e.target.value)
    }

return (
  <div>
    <Container4 onClick={backBtn}>
      <div className="wrapper" >
        <div className="link_wrapper">
          <button>Back</button>
            {/* <div className="icon">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>      
              </svg>
            </div> */}
        </div>
      </div>           
    </Container4> 

<div>
    {selectedStore.name === clothes.name ? <Clothes>{clothes.name.toUpperCase()}</Clothes> : null}
    {selectedStore.name === electronics.name ? <Electronics>{electronics.name.toUpperCase()}</Electronics> : null}
    {selectedStore.name === tools.name ?  <Tools className="font-link">{tools.name.toUpperCase()}</Tools> : null}
    {selectedStore.name === health.name ? <Health>{health.name.toUpperCase()}</Health> : null}
    {selectedStore.name === music.name ? <Music className="guitar">{music.name}</Music> : null}
    {selectedStore.name === all.name ? <All>{all.name.toLowerCase()}</All> : null}

    </div>
    
    <Form >
      <input autoComplete="off" onChange={handleChange} className="loginForm" id="searchbox" type="text" placeholder={`Filter ${selectedStore.name} Products`}/>
    </Form>
  
  <div>
    {isLoading ? <h2>Loading Products</h2> : 
      <div>
        {/* <strong>Sort by:</strong>
          <label>
            <input
              type="radio"
              value="Alphabetically"
              name="sort"
              checked={ sortBy === 'Alphabetically' }
              onChange={sortProducts}
            />
            Alphabetically
          </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy === 'Price'}
          onChange={sortProducts}
        />
        Price
      </label> */}
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
              </div>
}
</div>
        </div>
      );
    };

    const Container = styled.div`
    justify-content: center;

    margin-top: 50px;
    display: grid;
    grid-template-columns: 0fr 0fr 0fr 0fr 0fr;
    // grid-row-gap: 2vh;
    width: 100%;
`;

const Container4 = styled.div`
  margin-left: 10%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
        height: 2vw;
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
        margin-top:50px;
        outline: none;


    }
    textarea{
        width: 100%;
        position: relative;
        font-family: 'Dosis', sans-serif;
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
      font-family: 'Dosis', sans-serif;
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
    transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif); width: 5vw; height: 2.5vw;
    background-position: 50% 50%;
    cursor: pointer;
    border: 6px solid #7F55D0;
    text-shadow: 2px 2px 8px #7F55D0;
    color: silver;
  }
`;

const Clothes = styled.div`
font-family: "Sans-Serif"; "Optima";
font-size: 3vw;
color: #002A5A;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;
text-align: center;
`;

const Electronics = styled.div`
font-family: "Impact"; "Fantasy"; 
font-size: 4vw;
color: #EEE416;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;
text-align: center;

`;

const Tools = styled.div`
font-size: 4vw;
color: #F96302;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;
text-align: center;

`;

const Health = styled.div`
font-family: Helvetica, sans-serif;
font-size: 6vw;
color: #C60401;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;
text-align: center;

`;

const Music = styled.div`
font-size: 4vw;
color: #062F1C;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;
text-align: center;

`;

const All = styled.div`
font-size: 4vw;
color: #C60401;
font-weight: bold;
margin-bottom: 2vh;
margin-left: 5vh;
text-align: center;

`;

    export default StorePage;