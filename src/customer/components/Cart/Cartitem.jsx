import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Cartitem = () => {
  return (
    <div className=" px-9 py-4 shadow-lg border rounded-md mx-4 my-1 ">
      <div className=" flex items-center">
        <div className=" w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className=" w-full h-full object-cover object-top"
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
            alt=""
          />
        </div>
        <div className=" ml-5 space-y-1">
          <p className=" font-semibold">Gray tshirt</p>
          <p className=" opacity-70">Size:L ,gray</p>
          <div className="flex space-x-5 items-center pt-6">
            <p className=" font-mono text-xl  tracking-tight ">₹600</p>
            <p className=" font-mono text-xl tracking-tight line-through text-gray-700">
              ₹2000
            </p>
            <p className="  text-green-500">10% off</p>
          </div>
        </div>
      </div>
        <div className=" lg:flex items-center lg:space-x-10 pt-4"> 
             <div className=" flex items-center space-x-2">
              <IconButton sx={{color:'gray'}}>
                  <RemoveCircleOutlineIcon />
              </IconButton>
              <span className=" py-1 px-7 border rounded-sm "> 
              4
            </span>
            <IconButton sx={{color:"black"}}>
              <AddCircleOutlineIcon />
            </IconButton>
             </div>
             <div>
              <Button>
                remove
              </Button>
             </div>
        </div>
    </div>
  );
};

export default Cartitem;
