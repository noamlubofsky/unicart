import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import {useHistory} from "react-router";
import ReactPaginate from "react-paginate";
import ShoppingPage from "./ShoppingPage";


// const PER_PAGE = 4;
const Products = ({ products, stores, selectedStore, setSelectedStore, toClothes, toElectronics, toTools, toHealth, toMusic, toAll, fromMain, setFromMain, selectedProduct, setSelectedProduct, isLoading,
clothes, electronics, tools, health, music, all, handleSelect, search, setSearch, handleChange, display, toDisplay, setToDisplay, searchProducts, clearSearch}) => {
    // const [search, setSearch] = useState('')
    // const [toDisplay, setToDisplay] = useState([])
    const [sortBy, setSortBy] = useState('')
    const [random, setRandom] = useState([])

    // const handleChange = (e) => {
    //     e.preventDefault()
    //     setSearch(e.target.value)
    //     console.log(searchProducts)
    //   }
      
    //   const searchProducts = products.filter(product => 
    //     product.name.toLowerCase().includes(search.toLowerCase())
    //   ); 

    //   const display = (e) => {
    //       e.preventDefault()
    //   setToDisplay(searchProducts)
    //   console.log(toDisplay)    
    // }

    // const clearSearch = () => {
    //   setToDisplay([])
    // }
    
function main(){
    setFromMain(false)
    console.log(fromMain)
}

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
    return[...toDisplay].sort(function(a, b) {
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
    return[...toDisplay].sort(function (a, b) {
      return a.price - b.price;
    });
  }
  
  const sortProducts = (e) => {
    setSortBy(e.target.value)
  }

  const shuffled = products.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 3);
console.log(selected)


  return (
    <div>
      <Container2>
          {/* <Form>
            <input
              id="searchbox" onChange={handleChange} type="text" placeholder="What are you looking for today?"/>
            </Form>
            <Container4>
              <form onSubmit={display}>
                <div class="wrapper" >
                  <div class="link_wrapper">
                    <button type='submit'>Search</button>
                    <div class="icon">
                      <svg class="svg-icon" viewBox="0 0 20 20">
                      <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>    </svg>
                    </div>
                  </div>
                </div>     
              </form>
            </Container4> */}
      </Container2>
            {/* <br></br>
            <div>
            <h1>Shop by Store</h1>
            <br></br>
            </div> */}
            <br></br>
             {toDisplay.length > 0 ?
          <div>
            <button onClick={clearSearch}>Clear Search</button>
    <Container>
      <br></br>
        <Card1 key={clothes.id} onClick={() => {toClothes(); main()}}>
          <h2>{clothes.name.toUpperCase()}</h2>
        </Card1>
      <br></br>
        <Card2 key={electronics.id} onClick={() => {toElectronics(); main()}}>
          <h2>{electronics.name.toUpperCase()}</h2>
        </Card2>
      <br></br>
        <Card3 key={tools.id} onClick={() => {toTools(); main()}}>
          <h2 className="font-link">{tools.name.toUpperCase()}</h2>
        </Card3>
      <br></br>
        <Card4 key={health.id} onClick={() => {toHealth(); main()}}>
          <h2>{health.name.toUpperCase()}</h2>
        </Card4>
      <br></br>
        <Card5 key={music.id} onClick={() => {toMusic(); main()}}>
          <h2 className="guitar">{music.name}</h2>
        </Card5>
      <br></br>
        <Card6 key={all.id} onClick={() => {toAll(); main()}}>
          <h2>{all.name.toLowerCase()}</h2>
        </Card6>
    </Container>
         
    {toDisplay.length > 0 ? <h1>Browse Items Related to "{search}"</h1> : "Enter a Search or browse by Store" }
            <br></br>
          <div>
      <strong>Sort Products:</strong>
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
        By Price
            </label>
          <br />
        </div>
            <Container1>
        {toDisplay.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            handleSelect={handleSelect}
            // handleAddCart={handleAddCart}
          />
        ))}
          </Container1>
        </div>
      : 
      <ShoppingPage stores={stores} 
      selectedStore={selectedStore} 
      setSelectedStore={setSelectedStore}
         toClothes={toClothes} 
         toElectronics={toElectronics} 
         toTools={toTools} 
         toHealth={toHealth} 
         toMusic={toMusic}
         toAll={toAll}
         fromMain={fromMain} 
         setFromMain={setFromMain}
         isLoading={isLoading}
         clothes={clothes}
         electronics={electronics}
         tools={tools}
         health={health}
         music={music}
         all={all}/>}
    </div>
  );
};

const Container = styled.div`
//   margin-left: auto;
//   margin-right: 70px;
  margin-top: 50px;
  margin-bottom: 30px;
  display: grid;
  gap: 0;
  grid-template-columns: 4ch auto 4ch auto 4ch auto 4ch auto 4ch auto 4ch auto;
  // grid-row-gap: 0;
//   width: 100%;
`;

const Container1 = styled.div`
justify-content: center;

  margin-top: 50px;
  display: grid;
  grid-template-columns: 0fr 0fr 0fr 0fr 0fr;
  // grid-row-gap: 2vh;
  width: 100%;
`;


const Container2 = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Container4 = styled.div`
  margin-left: 10%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr ;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Form = styled.form `
    color: white;
    font-family: Andale Mono, monospace;
    font-size: 2em;
    margin:auto;
    padding:auto;
    width:50%;
    
    
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
    button[type=submit]{
        width: 10%;

     
    }`

    const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Card1 = styled.div`
  height: 5vw;
  width: 10vw;
//   margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background-color: #002A5A;
  border-radius: 20px;
    font-family: "Sans-Serif"; "Optima";
    font-size: .8vw;
    text-align: center;
    color: white;
    user-select: none;
    transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://thumbs.gfycat.com/BlueUnpleasantDassierat-max-1mb.gif); width: 10vw; height: 5vw;
    background-position: top;
    cursor: pointer;
    color: black;
    border: 6px solid black;
    text-shadow: 0 0 0.15em #B8E3EB;
}
`;

const Card2 = styled.div`
  height: 5vw;
  width: 10vw;
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
  font-size: 1.2vw;
  text-align: center;
  user-select: none;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://media4.giphy.com/media/pOEbLRT4SwD35IELiQ/giphy.gif);width: 10vw; height: 5vw;
    background-position: center;
    background-size: cover;
    color: #EEE416;
    cursor: pointer;
    border: 6px solid #EEE416;
    text-shadow: 0 0 0.15em #0345BE;
  }
`;

const Card3 = styled.div`
  height: 5vw;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  background-color: #F96302;
  border-radius: 20px;
  color: white;
  font-weight: heavier;
  font-size: 1.5vw;
  text-align: center;
  user-select: none;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://book.giflingua.com/images/origin/tols.gif);
    background-size: 11vw 7.5vw;
    background-position: 50% 46%;
    border: 6px solid black;
    color: #F96302;
    cursor: pointer;
    text-shadow: 0 0 0.30em black;


  }
`;

const Card4 = styled.div`
  height: 5vw;
  width: 10vw;
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
font-size: 2.5vw;
  text-align: center;
  text-position: center;
  user-select: none;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://i1.wp.com/supermed.pro/img/gif/super8.gif);width: 10vw; height: 5vw;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    border: 6px solid #C60401;
    text-shadow: 0 0 0.15em #B8E3EB;

  }
`;

const Card5 = styled.div`
  height: 5vw;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #062F1C;
  background-color: #5A5250;
  border-radius: 20px;
  color: #062F1C;
  font-size: 1.2vw;
  text-align: center;
  user-select: none;
  transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    // background-image: url(https://i.pinimg.com/originals/e2/12/7b/e2127b452438f766fab14c1480aebd0f.gif);width: 10vw; height: 5vw;
    // background-position: 100% 30%;
    background-image: url(https://thumbs.gfycat.com/BraveUnknownLemming-max-1mb.gif);width: 10vw; height: 5vw;
    background-position: 100% -40%;
    background-size: cover;
    cursor: pointer;
    border: 6px solid #014D00;
    color: #014D00;
    text-shadow: 0 0 0.15em #F2047D;
  }
`;

const Card6 = styled.div`
  height: 5vw;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  background-color: #B90101;
  border-radius: 20px;
  font-size: 1.2vw;
  text-align: center;
color: white;
user-select: none;
transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://cdn.dribbble.com/users/1170232/screenshots/3276234/target_logo.gif);width: 10vw; height: 5vw;
    background-position: 100% 15%;
    background-size: cover;
    cursor: pointer;
    color: black;
    border: 6px solid #B90101;
    text-shadow: 0 0 0.30em #B90101;
  }
`;
export default Products;

