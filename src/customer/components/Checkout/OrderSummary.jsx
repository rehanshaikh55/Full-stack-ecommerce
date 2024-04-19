import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import Cartitem from '../Cart/Cartitem'


const OrderSummary = () => {
  return (
    <div>
    <div className=' p-5 mb-5 shadow-lg rounded-s-md border'>
      <AdressCard />

    </div>
    <div>
      <div className=" lg:grid grid-cols-3 lg:px-3 relative">
        <div className=" col-span-2">
          {[1,1,1,1].map((item)=><Cartitem />)}
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
                  <span className="">₹6000</span>
                </div>
                <div className=" flex justify-between pt-3 text-black">
                  <span>Disccount</span>
                  <span className=" text-green-600">-₹4000</span>
                </div>
                <div className=" flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className=" text-green-600">Free</span>
                </div>
                <div className=" flex justify-between pt-3 border-t-2">
                  <span className=" font-bold">Total Amount</span>
                  <span className="">₹2000</span>
                </div>
            </div>
            <button
                type="submit"
                className=" my-4 mx-4 w-[94%] items-center justify-center rounded-md border border-transparent bg-black  py-3 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Check Out
              </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary
