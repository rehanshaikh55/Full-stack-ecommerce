import React from "react";
import { Grid, Button, Box, TextField } from "@mui/material";
import AddressCard from "../AdressCard/AdressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../state/order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddressFrom = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
   
    const data = new FormData(e.currentTarget);
    const address={
      firstName:data.get("firstName"),
      lastName:data.get("lastName"),
      streetAddress:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      zipCode:data.get("zip"),
      mobile:data.get("phoneNumber"),
    }
    const orderData={address,navigate}
    dispatch(createOrder(orderData))
    console.log(address,orderData)
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className=" border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className=" p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "black" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className=" border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="honorific-prefix"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete="shipping street-address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-line3"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Region"
                    fullWidth
                    autoComplete="address-level3"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Pin Code"
                    fullWidth
                    autoComplete="shopping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button
              sx={{py:1.5 ,mt: 2, bgcolor: "black" }}
              size="large"
              variant="contained"
              type="submit"
            >
                  Deliver Here
                </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressFrom;
