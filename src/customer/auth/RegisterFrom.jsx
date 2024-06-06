import React, { useEffect } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../state/Auth/Action";
import  store  from "../../state/store";


const RegisterFrom = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)

 useEffect(()=>{
  if(jwt){
    dispatch(getUser(jwt))

  }
 },[jwt,auth.jwt])

 


  const handleSubmit = (e) => {
        e.preventDefault()
        const data=new FormData(e.currentTarget)
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
  }
  dispatch(register(userData))
        console.log(userData)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstNames"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            ></TextField>
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            ></TextField>
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            ></TextField>
          </Grid>
          <Grid item xs={12} >
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
                padding:"0.8rem",
              }}
            
        
              type="submit"
              variant="contained"
              size="large"
              className=" font-semibold bg-black w-full"
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className=" flex justify-center items-center">
        <div className=" py-3 flex items-center">
          <p>if you have already registered?</p>
          <Button onClick={()=>navigate("/login")} className=" ml-5 " size="small">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterFrom;
