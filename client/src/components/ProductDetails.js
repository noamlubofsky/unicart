import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {useNavigate} from "react-router";
import Review from "./Review"


function ProductDetails({ handleAddCart, user}) {
    const [productDetails, setProductDetails] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    // const [related, setRelated] = useState([]);
    // const [random, setRandom] = useState([])
    const [quantity, setQuantity] = useState(1);
    const [store, setStore] = useState({});
    const [review, setReview] = useState(null);

    let navigate = useNavigate();

    const id = useParams().id;
  // const category = useParams().category;

  // const storeProducts = products.filter(product => 
  //   product.store_id === selectedProduct.store.id)

  //   useEffect(() => {
  //     const shuffled = storeProducts.sort(() => 0.5 - Math.random());
  //     let selected = shuffled.slice(0, 3);
  //     setRandom(selected)
  //     console.log(random)
  //   }, [])

useEffect(() => {
    // setIsLoading(true)
    fetch(`/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setStore(data.store)
      });

    fetch(`/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // setIsLoading(false)
      });
  }, [id]);

    const createReview = (content) => {
    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_id: id,
        content: content,
      }),
    })
      .then((response) => response.json())
      .then((review) => setReviews([...reviews, review]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createReview(review);
  };

  function backToStore(){
    navigate(`/storespage/${productDetails.store.id}`)
  }

  function toCart(){
    navigate(`cartpage/${user.id}`)
  }

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleClick = (id) => {
      handleAddCart(id, quantity, store);
  };

  return(
      <div>
        <Container6>
          {isLoading ? <h2>Loading</h2> :
      <div>
        <Container4 onClick={backToStore}>
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
            <Container>
            <Image src={productDetails.image_url} alt="Product" />

<Card2>
{/* <h1>{productDetails.store.name}</h1> */}
      <h2>{productDetails.name}</h2>
      <h4>${productDetails.price}</h4>
        <h4>{productDetails.inventory} Left in Stock</h4>
        <label for="quant">Quantity</label>
        <select name="quant" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br></br>
        <Add>
        <div className="wrapper" >
  <div className="link_wrapper">
    <AddButton onClick={() => handleClick(productDetails.id)}>Add to Cart</AddButton>
    <div className="icon">
    <svg className="svg-icon" viewBox="0 0 20 20">
    <path d="M9.941,4.515h1.671v1.671c0,0.231,0.187,0.417,0.417,0.417s0.418-0.187,0.418-0.417V4.515h1.672c0.229,0,0.417-0.187,0.417-0.418c0-0.23-0.188-0.417-0.417-0.417h-1.672V2.009c0-0.23-0.188-0.418-0.418-0.418s-0.417,0.188-0.417,0.418V3.68H9.941c-0.231,0-0.418,0.187-0.418,0.417C9.522,4.329,9.71,4.515,9.941,4.515 M17.445,15.479h0.003l1.672-7.52l-0.009-0.002c0.009-0.032,0.021-0.064,0.021-0.099c0-0.231-0.188-0.417-0.418-0.417H5.319L4.727,5.231L4.721,5.232C4.669,5.061,4.516,4.933,4.327,4.933H1.167c-0.23,0-0.418,0.188-0.418,0.417c0,0.231,0.188,0.418,0.418,0.418h2.839l2.609,9.729h0c0.036,0.118,0.122,0.214,0.233,0.263c-0.156,0.254-0.25,0.551-0.25,0.871c0,0.923,0.748,1.671,1.67,1.671c0.923,0,1.672-0.748,1.672-1.671c0-0.307-0.088-0.589-0.231-0.836h4.641c-0.144,0.247-0.231,0.529-0.231,0.836c0,0.923,0.747,1.671,1.671,1.671c0.922,0,1.671-0.748,1.671-1.671c0-0.32-0.095-0.617-0.252-0.871C17.327,15.709,17.414,15.604,17.445,15.479 M15.745,8.275h2.448l-0.371,1.672h-2.262L15.745,8.275z M5.543,8.275h2.77L8.5,9.947H5.992L5.543,8.275z M6.664,12.453l-0.448-1.671h2.375l0.187,1.671H6.664z M6.888,13.289h1.982l0.186,1.671h-1.72L6.888,13.289zM8.269,17.466c-0.461,0-0.835-0.374-0.835-0.835s0.374-0.836,0.835-0.836c0.462,0,0.836,0.375,0.836,0.836S8.731,17.466,8.269,17.466 M11.612,14.96H9.896l-0.186-1.671h1.901V14.96z M11.612,12.453H9.619l-0.186-1.671h2.18V12.453zM11.612,9.947H9.34L9.154,8.275h2.458V9.947z M14.162,14.96h-1.715v-1.671h1.9L14.162,14.96z M14.441,12.453h-1.994v-1.671h2.18L14.441,12.453z M14.72,9.947h-2.272V8.275h2.458L14.72,9.947z M15.79,17.466c-0.462,0-0.836-0.374-0.836-0.835s0.374-0.836,0.836-0.836c0.461,0,0.835,0.375,0.835,0.836S16.251,17.466,15.79,17.466 M16.708,14.96h-1.705l0.186-1.671h1.891L16.708,14.96z M15.281,12.453l0.187-1.671h2.169l-0.372,1.671H15.281z"></path>    </svg>
    </div>
  </div>
</div>  
</Add>
        </Card2>
        {/* <Card3 onClick={toCart}>Add to Cart</Card3> */}
        </Container>
      </div> 
}
<Container5>Reviews for {productDetails.name}</Container5>
{reviews.map(review => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
        </Container6>

        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="review">Write a Review</Label>
            <Textarea
              rows="3"
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button type="submit">Submit</Button>
          </FormField>
        </form>
      </div>
  )

}

const Container6 = styled.div`
// background-image: url("https://cdn.wallpapersafari.com/90/7/KGe7I0.jpg")
`

const Add= styled.div`
`


const AddButton = styled.div`
display: fixed;
width: 9vw;
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
    width: 12vw;
    height: 6vh;
    border: 3px solid #F5931F;
    background: transparent;
    color: #F05A27;
    cursor: pointer;
  }
`;

const Card = styled.div`
height: 2.5vw;
width: 5vw;
margin-left: 10px;
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
    // background-image: url(https://i2.wp.com/windowscustomization.com/wp-content/uploads/2019/01/Blue-Connected-Particles.gif?fit=750%2C354&quality=80&strip=all&ssl=1); width: 5vw; height: 2.5vw;
    background-position: 50% 50%;
    cursor: pointer;
    border: 6px solid #7F55D0;
    text-shadow: 2px 2px 8px #7F55D0;
    color: silver;
  }
`;

const Container = styled.div`
justify-content: center;

  margin-top: 50px;
  display: grid;
  grid-template-columns: 0fr 0fr 0fr 0fr 0fr;
  // grid-row-gap: 2vh;
  width: 100%;
`;
const Container5 = styled.div`
  margin-left: 10%;
  margin-top: 15vh;
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  font-weight: bold;
  font-size: 3em;
  font-family: 'Dosis', sans-serif;

`;

const Container4 = styled.div`
  margin-left: 10%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
`;
const Arrow = styled.div`
 font-size: 10em;
 font-family: 'Marker Felt', fantasy;
 `;

 const Image = styled.img`
 margin-top: 5px;
   width: 10vw;
   height: 15vw;
 `;

const Card2 = styled.div`
margin-top: 10px;
margin-bottom: 10px;
margin-right: 10px;
margin-left: 10px
  height: 35vw;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  border: 1px solid transparent;
`;

const Card3 = styled.div`
height: 2.5vw;
width: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 3px solid black;
  background-color: #2E6268;
  border-radius: 50%;
  width: 175px;
  height: 175px;
  font-family: 'Marker Felt', fantasy;
  text-align: center;  font-family: "Sans-Serif"; "Optima";
    font-weight: heavier;
    font-size: 2em;
    color: white;
    transition: box-shadow .3s;

  &:hover {
    box-shadow: 0px 0px 30px 0px #848484;
    background-image: url(https://cdn.dribbble.com/users/146773/screenshots/4228811/dribble_cart.gif);
    background-position: 50% 50%;
    cursor: pointer;
    // border: 6px solid #7F55D0;
    text-shadow: 2px 2px 8px #7F55D0;
    color: silver;
    color: transparent;
  }
`;

const FormField = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
    margin-left: 10%;
    width: 40vw;
    font-family: 'Dosis', sans-serif;
  }
`;

const Label = styled.label`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Textarea = styled.textarea`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
  resize: none;
  font-family: 'Dosis', sans-serif;

`;
const Button = styled.button`
margin-left: 10%;
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: 20px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default ProductDetails