import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ShoppingPage from "./components/ShoppingPage";
import Footer from "./components/Footer";
import StorePage from "./components/StorePage";
import ShoppingCart from "./components/ShoppingCart";
import AccountPage from "./components/AccountPage";
import Checkout from "./components/Checkout";
import {useHistory} from "react-router";
import { useParams } from "react-router-dom";



function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [fromMain, setFromMain] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [toDisplay, setToDisplay] = useState([])
  const [userCart, setUserCart] = useState([])

  let history = useHistory();
  const id = useParams().id;

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, []);

  useEffect(() => {
    fetch("/stores").then((r) => {
      if (r.ok) {
        r.json().then((stores) => setStores(stores));
      }
    });
  }, []);

  useEffect(() => {
    fetch(`/cart_items`).then((r) => {
      if (r.ok) {
        r.json().then((cart) => setShoppingCart(cart));
      }
    });
    fetch("/products").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products))
        .then(history.push("/products"))
      }
    });
  }, []);

  // useEffect(() => {
  //   fetch(`/shopping_carts/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserCart(data);
  //     });
  // }, [id]);

  
  // const userCartItems = shoppingCart.filter(item => 
  //   item.shopping_cart.id === userCart.id)

const clothes = stores[0]
const electronics = stores[1]
const tools = stores[2]
const health = stores[3]
const music = stores[4]
const all = stores[5]
  

  function toClothes(){
    setSelectedStore(stores[0])
    history.push(`/stores/1`)
  }

  function toElectronics(){
    setSelectedStore(stores[1])
    history.push(`/stores/2`)
  }

  function toTools(){
    setSelectedStore(stores[2])
    history.push(`/stores/3`)
  }

  function toHealth(){
    setSelectedStore(stores[3])
    history.push(`/stores/4`)
  }

  function toMusic(){
    setSelectedStore(stores[4])
    history.push(`/stores/5`)
  }

  function toAll(){
    setSelectedStore(stores[5])
    history.push(`/stores/6`)
  }

  function backBtn(){
{
  // fromMain ? history.push("/shopping") : 
  history.push("/products")}  
}

const clearSearch = () => {
  setToDisplay([])
}

const handleSelect = (product) => {
 setSelectedProduct(product)
//  console.log(selectedProduct)
}

const handleChange = (e) => {
  e.preventDefault()
  setSearch(e.target.value)
  // console.log(search)
}

const searchProducts = products.filter(product => 
  product.name.toLowerCase().includes(search.toLowerCase())
); 

const display = (e) => {
    e.preventDefault()
setToDisplay(searchProducts)
// console.log(toDisplay)    
}

const handleAddCart = (id, quantity, store) => {
  let item = products.find((item) => item.id === id);

  if (shoppingCart.some((cart) => cart.product.id === item.id)) {
    let line = shoppingCart.find((cart) => cart.product.id === item.id);
    // console.log(line);
    return updateCartItemQuantity(line.id, quantity);
  }

  fetch("/cart_items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_id: id,
      quantity: quantity,
      store_id: store.id
    }),
  })
    .then((response) => response.json())
    .then((item) => setShoppingCart([...shoppingCart, item]))
    .then(() => console.log(shoppingCart))
};

const updateCartItemQuantityFrontend = (id, quantity) => {
  const updatedData = shoppingCart.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity: quantity,
      };
    } else {
      return item;
    }
  });
  setShoppingCart(updatedData);
};

const updateCartItemQuantity = (CartItemID, quantity) => {
  updateCartItemQuantityFrontend(CartItemID, quantity);
  fetch(`/cart_items/${CartItemID}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quantity: quantity,
    }),
  });
};

const removeFromCart = (CartItemID) => {
  let updatedCart = shoppingCart.filter((item) => item.id !== CartItemID);
  setShoppingCart(updatedCart);
  fetch(`/cart_items/${CartItemID}`, {
    method: "DELETE",
  });
};

  if (!user) return <Login onLogin={setUser} />;
  // if (user) history.push(`/products`)


  return (
    <div>
      <NavBar 
        user={user} 
        setUser={setUser} 
        search={search} 
        setSearch={setSearch} 
        handleChange={handleChange}
        toDisplay={toDisplay} 
        setToDisplay={setToDisplay} 
        display={display} 
        searchProducts={searchProducts} 
        clearSearch={clearSearch} 
        cart={shoppingCart.length}
        shoppingCart={shoppingCart}
        // cart={userCartItems.length}
      />

      <main>
        <Switch>
          <Route path="/shopping">
            <ShoppingPage 
              stores={stores} 
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
              all={all}
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetails 
              handleAddCart={handleAddCart} 
              products={products}
              selectedProduct={selectedProduct}
              user={user}
            />
          </Route>
          <Route path="/products">
            <Products 
            products={products} 
            stores={stores} 
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
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            isLoading={isLoading}
            clothes={clothes}
            electronics={electronics}
            tools={tools}
            health={health}
            music={music}
            all={all}
            handleSelect={handleSelect}
            search={search} 
            setSearch={setSearch} 
            handleChange={handleChange}
            toDisplay={toDisplay} 
            setToDisplay={setToDisplay} 
            display={display} 
            searchProducts={searchProducts}
            clearSearch={clearSearch}
            />
          </Route>
          <Route path="/stores/:id">
            <StorePage 
              products={products} 
              selectedStore={selectedStore} 
              setSelectedStore={setSelectedStore} 
              fromMain={fromMain} 
              setFromMain={setFromMain} 
              backBtn={backBtn}    
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              isLoading={isLoading}
            />
          </Route>
          <Route path={`/cart`}>
            <ShoppingCart 
              shoppingCart={shoppingCart}
              updateCartItemQuantity={updateCartItemQuantity}
              removeFromCart={removeFromCart}
              user={user}
            />
          </Route>
          <Route path="/user">
            <AccountPage 
              user={user}
              setUser={setUser}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
              clothes={clothes}
              electronics={electronics}
              tools={tools}
              health={health}
              music={music}
              all={all}
              user={user}
              removeFromCart={removeFromCart}
            />
          </Route>
        </Switch>
      </main>
    <Footer />
    </div>
  );
}

export default App;
