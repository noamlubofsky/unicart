import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ShoppingPage from "./components/ShoppingPage";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/products").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, [user]);

  useEffect(() => {
    fetch("/stores").then((r) => {
      if (r.ok) {
        r.json().then((stores) => setStores(stores));
      }
    });
  }, [user]);

  console.log(user);
  console.log(products);
  console.log(stores)

  if (!user) return <Login onLogin={setUser} />;


  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
      <ShoppingPage stores={stores}/>
      <main>
        <Switch>
          {/* <Route path="/cart">
            <Cart
              shoppingCart={shoppingCart}
              products={products}
              updateLineItemQuantity={updateLineItemQuantity}
              removeFromCart={removeFromCart}
              user={user}
            />
          </Route> */}
          <Route path="/products/:id">
            <ProductDetails 
            // handleAddCart={handleAddCart} 
            />
          </Route>
          <Route path="/products">
            <Products products={products} />
          </Route>
          {/* <Route path="/">
            <Landing />
          </Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
