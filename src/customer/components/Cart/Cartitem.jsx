
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../state/cart/Action";
import { IconButton } from "@mui/material";

const Cartitem = ({item}) => {
  const dispatch= useDispatch();
  const handleUpdateCartItem=(num)=>{
     const data={data:{quantity:item.quantity+num},cartItemId:item?._id}
        dispatch(updateCartItem(data))
  }
  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item._id))
  }
  return (
    <div className=" px-9 py-4 shadow-lg border rounded-md mx-4 my-1 ">
      <div className=" flex items-center">
        <div className=" w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className=" w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className=" ml-5 space-y-1">
          <p className=" font-semibold">{item.product.title}</p>
          <p className=" opacity-70">{item.size} ,  {item.product.color}</p>
          <div className="flex space-x-5 items-center pt-6">
            <p className=" font-mono text-xl  tracking-tight ">{item.price}</p>
            <p className=" font-mono text-xl tracking-tight line-through text-gray-700">
              ₹2000
            </p>
            <p className="  text-green-500">10% off</p>
          </div>
        </div>
      </div>
        <div className=" lg:flex items-center lg:space-x-10 pt-4"> 
             <div className=" flex items-center space-x-2">
              <IconButton  onClick={()=>handleUpdateCartItem(-1)} sx={{color:'black'}} disabled={item.quantity<=1} >
                  <RemoveCircleOutlineIcon />
              </IconButton>
              <span className=" py-1 px-7 border rounded-sm "> 
              {item.quantity}
            </span>
            <div>
            <IconButton sx={{color:'black'}} onClick={()=>handleUpdateCartItem(1)} >
              <AddCircleOutlineIcon />
            </IconButton>
            </div>
             </div>
             <div >
              <button  onClick={handleRemoveCartItem}>
                Remove
              </button>
             </div>
        </div>
    </div>
  );
};

export default Cartitem;
