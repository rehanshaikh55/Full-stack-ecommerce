import React, { useEffect } from "react";
import Cartitem from "./Cartitem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../state/cart/Action";

const Cart = () => {
   const navigate = useNavigate();
   const dispatch=useDispatch();
   const {cart}=useSelector(store=>store)
   const hancleCheckOut =()=>{
    navigate("/checkout?step=2")
   }
   useEffect(()=>{
          dispatch(getCart())
   },[cart.updateCartItems,cart.deleteCartItems])
  return (
    <div>
      <div className=" lg:grid grid-cols-3 lg:px-3 relative">
        <div className=" col-span-2">
          {cart.cart?.cartItems.map((item)=><Cartitem item={item} />)}
        </div>
        <div className=" px-5 lg:sticky lg:h-[100vh]  mt-5 lg:mt-0">
          <div className=" border">

            <p className=" uppercase font-semibold opacity-65 pb-4 p-2">
              Price Details
            </p>
            <hr />
            <div className=" space-y-3  p-4">
                <div className=" flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span className="">₹{cart.cart?.totalPrice}</span>
                </div>
                <div className=" flex justify-between pt-3 text-black">
                  <span>Disccount</span>
                  <span className=" text-green-600">-₹{cart.cart?.discounte}</span>
                </div>
                <div className=" flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className=" text-green-600">Free</span>
                </div>
                <div className=" flex justify-between pt-3 border-t-2">
                  <span className=" font-bold">Total Amount</span>
                  <span className="">₹{cart.cart?.totalPrice}</span>
                </div>
            </div>
            <button
            onClick={hancleCheckOut}
                type="submit"
                className=" my-4 mx-4 w-[94%] items-center justify-center rounded-md border border-transparent bg-black  py-3 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Check Out
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
