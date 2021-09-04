import { useState, useEffect } from 'react';
import './App.css';
import { Products, Navbar, Cart } from './components';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  async function fetchProducts() {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  async function fetchCart() {
    setCart(await commerce.cart.retrieve());
  }

  async function addToCart(productId, quantity) {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} addToCart={addToCart}/> */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;
