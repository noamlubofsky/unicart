import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import {useHistory} from "react-router";
import ReactPaginate from "react-paginate";

// const PER_PAGE = 4;
const Products = ({ products, stores, selectedStore, setSelectedStore, toClothes, toElectronics, toTools, toHealth, toMusic, toAll, fromMain, setFromMain, selectedProduct, setSelectedProduct, isLoading,
clothes, electronics, tools, health, music, all}) => {
    const [search, setSearch] = useState('')
    const [toDisplay, setToDisplay] = useState([])



    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(searchProducts)
        // setToDisplay([...toDisplay, searchProducts])
        // console.log(toDisplay)
      }
      
      const searchProducts = products.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase())
      ); 

      const display = (e) => {
          e.preventDefault()
      setToDisplay(searchProducts)
      console.log(toDisplay)    
    }
    
function main(){
    setFromMain(false)
    console.log(fromMain)
}

  return (
    <div>
            <div>
                <Container2>
      <Form onSubmit={display}>
          <span>
                <input
                 id="searchbox" onChange={handleChange} type="text" placeholder="What are you looking for today?"/>
                 <input type='submit' value='Search'/>
                 </span>
            </Form>
            </Container2>
            <br></br>
            </div>
        <div>
            <div>
            <h1>Shop by Store</h1>
            <br></br>
            </div>
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
        <h2>{tools.name.toUpperCase()}</h2>
    </Card3>
    <br></br>
    <Card4 key={health.id} onClick={() => {toHealth(); main()}}
    >
        <h2>{health.name.toUpperCase()}</h2>
    </Card4>
    <br></br>
    <Card5 key={music.id} onClick={() => {toMusic(); main()}}
    >
        <h2>{music.name}</h2>
    </Card5>
    <br></br>
    <Card6 key={all.id} onClick={() => {toAll(); main()}}
    >
        <h2>{all.name.toLowerCase()}</h2>
    </Card6>
    <br></br>
    </Container>
        </div>
        <div>
            <h1>Browse Items Related to {search}</h1>
            <br></br>
            </div>
{isLoading ? <h2>Loading Products</h2> :
            <Container1>
        {toDisplay.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            // handleAddCart={handleAddCart}
          />
        ))}
        
      </Container1>
}
      {/* <Wrapper>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </Wrapper> */}
    </div>
  );
};

const Container = styled.div`
//   margin-left: auto;
//   margin-right: 70px;
//   margin-top: 50px;
  display: grid;
  grid-template-columns: 4ch auto 4ch auto 4ch auto 4ch auto 4ch auto 4ch auto;
  grid-row-gap: 10vh;
//   width: 100%;
`;

const Container1 = styled.div`
  margin-left: 0%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 2vh;
  width: 100%;
`;


const Container2 = styled.div`
  margin-left: 0%;
  margin-top: 50px;
  display: grid;
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
        width: 50%;
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
    input[type=submit]{
        width: 10%;
        font-family: 'Monospace'; 
        font-size: large;
        background-color:#black;
        color:navy;
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
  background-color: navy;
  border-radius: 20px;
    font-family: "Sans-Serif"; "Optima";
    font-weight: heavier;
    font-size: 1.25em;
    text-align: center;
    color: white;
    user-select: none;

  &:hover {
    box-shadow: 15px 15px 15px 15px #848484;
    background-image: url(https://thumbs.gfycat.com/BlueUnpleasantDassierat-max-1mb.gif); width: 10vw; height: 5vw;
    background-position: 50% 15%;
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
  font-size: 1.5em;
  text-align: center;
  user-select: none;

  &:hover {
    box-shadow: 15px 15px 15px 15px #848484;
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
  font-family: "Stencil Std"; "fantasy"; 
  color: white;
  font-weight: heavier;
  font-size: 1.5em;
  text-align: center;
  user-select: none;

  &:hover {
    box-shadow: 15px 15px 15px 15px #848484;
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
font-size: 2.5em;
  text-align: center;
  text-position: center;
  user-select: none;

  &:hover {
    box-shadow: 15px 15px 15px 15px #848484;
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
  border: 3px solid #F2047D;
  background-color: #5A5250;
  border-radius: 20px;
  font-family: "Fantasy"; "Blippo";
  color: #F2047D;
  font-size: 1.5em;
  text-align: center;
  user-select: none;
	
  &:hover {
    box-shadow: 15px 15px 15px 15px #848484;
    background-image: url(https://i.pinimg.com/originals/e2/12/7b/e2127b452438f766fab14c1480aebd0f.gif);width: 10vw; height: 5vw;
    background-position: 100% 30%;
    background-size: cover;
    cursor: pointer;
    border: 6px solid maroon;
    color: maroon;
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
  font-size: 1.5em;
  text-align: center;
color: white;
user-select: none;

  &:hover {
    box-shadow: 15px 15px 15px 15px #848484;
    box-shadow: 15px 15px 15px 15px #848484;
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

