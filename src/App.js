
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/components/Cart/Cart.jsx';
import Checkout from './customer/components/Checkout/Checkout.jsx';
import Navigation from './customer/components/Navigation/navigation.jsx';
import Order from './customer/components/Order/Order.jsx';
import OrderDetails from './customer/components/Order/OrderDetails.jsx';
import Product from './customer/components/Product/Product.jsx';
import ProductDetails from './customer/components/ProductDetails/ProductDetails.jsx';
import Footer from './customer/components/footer/footer.jsx';
import HomePage from './customer/pages/HomePage/HomePage.jsx';
import CustomerRouters from './Routers/CustomerRouters.jsx';

function App() {
  return (
    <div className="App">
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
      </Routes>
    
    <div>
     {/*<ProductDetails /> */}
     {/* <Product /> */}
      {/* <HomePage /> */}
      {/* <Cart/> */}
      {/* <Checkout /> */}
      {/* <Order /> */}
      {/* <OrderDetails /> */}
      
    </div>
    </div>
    </div>
  );
}

export default App;
