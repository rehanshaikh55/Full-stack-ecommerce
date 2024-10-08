import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${product?._id}`)} className="productcard w-[15rem] m-3 transition-all cursor-pointer">
      <div className=" h-[20rem]">
        <img
          className=" w-full h-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textpart bg-white p-3 flex-col text-left">
        <div>
          <p className=" font-bold opacity-60">
            {product.title}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className=" font-semibold">Rs. {product.price}</p>
          <p className=" line-through opacity-50"></p>
          <p className=" text-green-600 font-semibold">50% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
