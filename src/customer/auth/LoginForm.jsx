import React from 'react'

import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../state/Auth/Action';


const LoginForm = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()
    const data=new FormData(e.currentTarget)
    const userData={
     
        email:data.get("email"),
        password:data.get("password")
}
dispatch(login(userData))
    console.log(userData)
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          
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
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className=" flex justify-center items-center">
        <div className=" py-3 flex items-center">
          <p>if you don't have account?</p>
          <Button onClick={()=>navigate("/register")} className=" ml-5 " size="small">Register</Button>
        </div>
      </div>
      </div>
  )
}

export default LoginForm