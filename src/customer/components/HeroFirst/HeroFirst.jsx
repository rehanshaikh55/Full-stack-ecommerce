import { jsx } from "@emotion/react";
import React from "react";

const HeroFirst = () => {
  return (
    <div>
      <div class="flex flex-wrap mb-9">
        <div class="w-full sm:w-8/12 mb-10">
          <div class="container mx-auto h-full sm:p-10">
            <header class="container px-20 lg:flex mt-10 items-center h-full lg:mt-0">
              <div class="w-full">
                <h1 class="text-4xl lg:text-3xl font-bold">
                  Welcome to Glintglam - Where Elegance Meets Contemporary
                  Confidence!
                </h1>
                <div class="w-20 h-2  my-4"></div>
                <p class="text-lg mb-10 line-clamp-6">
                  Step into the world of refined style and unmatched
                  sophistication with Glintglam, your go-to destination for
                  elevating your wardrobe to new heights. More than just a men's
                  fashion brand, Glintglam is a lifestyle statement that
                  encapsulates the essence of modern masculinity.
                </p>
                <button class="relative px-8 py-3 rounded-md bg-white isolation-auto z-10 border-2 border-black
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full hover:text-white  before:bg-black before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">Learn More</button>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://i.ibb.co/SKgFv10/image-20240320-13463594a09c66-fde7-4bf4-8e45-7346e523e040.png"
          className=" w-full h-48 object-cover sm:h-screen sm:w-4/12 transition duration-300 ease-in-out hover:scale-105 rounded-3xl p-3"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroFirst;
