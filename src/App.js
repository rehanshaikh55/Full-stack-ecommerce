
import './App.css';
import Cart from './customer/components/Cart/Cart.jsx';
import Checkout from './customer/components/Checkout/Checkout.jsx';
import Navigation from './customer/components/Navigation/navigation.jsx';
import Order from './customer/components/Order/Order.jsx';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Footer from './customer/components/footer/footer.jsx';
import HomePage from './customer/pages/HomePage/HomePage.jsx';

function App() {
  return (
    <div className="App">
    <div>
    <Navigation  />
    <div>
     {/*<ProductDetails /> */}
     {/* <Product /> */}
      {/* <HomePage /> */}
      {/* <Cart/> */}
      {/* <Checkout /> */}
      <Order />
      <Footer /> 
    </div>
    </div>
    </div>
  );
}

export default App;
