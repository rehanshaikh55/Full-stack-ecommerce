import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";
const orderStatus = [
  { lable: "On the way", value: "on_the_way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Cancelled", value: "cancelled" },
  { lable: "Returned", value: "returned" },
];

const Order = () => {
  return (
    <div>
      <Grid
        container
        className=""
        spacing={0}
        sx={{ justifyContent: "space-between" }}
      >
        <Grid item xs={3}>
          <div className=" h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className=" font-bold text-lg">Filter</h1>
            <div className=" space-y-4 mt-10">
              <h1 className=" font-semibold">Order Status</h1>
              {orderStatus.map((option) => (
                <div className="items-center">
                  <input
                    type="checkbox"
                    className=" h-4 w-4 border-gray-400 focus:ring-black"
                    defaultValue={option.value}
                  />
                  <label
                    className=" ml-3 text-sm text-gray-700"
                    htmlFor={option.value}
                  >
                    {option.lable}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9} className=" px-8 py-4">
          <div className=" space-y-3">
          {[1,1,1,1].map((item)=><OrderCard />)}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
