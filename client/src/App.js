import React, { useEffect, useState } from "react";
import GlobalFonts from './fonts/fonts';
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ShoppingPage from "./components/ShoppingPage";
import Footer from "./components/Footer";
import StorePage from "./components/StorePage";
import {useHistory} from "react-router";


function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  // const [shoppingCart, setShoppingCart] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [fromMain, setFromMain] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  let history = useHistory();

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
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
    fetch("/products").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, []);

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
{fromMain ? history.push("/shopping") : history.push("/products")}  
}


  // console.log(user);
  // console.log(products);
  // console.log(stores)

  if (!user) return <Login onLogin={setUser} />;


  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
      {/* <ShoppingPage stores={stores}/> */}

      <main>
      <GlobalFonts />
        <Switch>
  
             <Route path="/shopping">
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
               all={all}
            // handleAddCart={handleAddCart} 
            />
          </Route>
          <Route path="/products/:id">
            <ProductDetails 
            // handleAddCart={handleAddCart} 
            />
          </Route>
          <Route path="/products">
            <Products products={products} 
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
            />
          </Route>
          <Route path="/stores/:id">
            <StorePage products={products} 
            selectedStore={selectedStore} 
            setSelectedStore={setSelectedStore} 
            romMain={fromMain} 
            setFromMain={setFromMain} 
            backBtn={backBtn}    
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            isLoading={isLoading}
            />
          </Route>
          {/* <Route path="/">
            <Landing />
          </Route> */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
