import { useState, useEffect } from 'react';
import './App.css';
import { Products, Navbar, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { set } from 'react-hook-form';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  async function fetchProducts() {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  async function fetchCart() {
    setCart(await commerce.cart.retrieve());
  }

  async function addToCart(productId, quantity) {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  async function updateCartQty(productId, quantity) {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  async function removeFromCart(productId) {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }

  async function emptyCart() {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  async function refreshCart() {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }

  async function captureCheckout(checkoutTokenId, newOrder) {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              updateCartQty={updateCartQty}
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              captureCheckout={captureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
