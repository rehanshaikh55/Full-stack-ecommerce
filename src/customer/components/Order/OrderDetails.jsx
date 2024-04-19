import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';


const OrderDetails = () => {
  return (
    <div className=' px-5 lg:px-24'>
        <div>
          <h1 className='text-xl py-5 font-bold'>Delivery Address</h1>
        <AdressCard />
        </div>
        <div className=' py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <Grid container className=' space-y-5'>
            {[1,1,1,1,1].map((item)=>
        
<Grid item container className=' rounded-lg shadow-md p-5 border ' sx={{alignItems:'center',justifyContent:'space-between'}}>
         <Grid item xs={6}>
       <div className=' flex space-x-8 items-center'>
        <img className=' h-[5rem] w-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
       <div className=' space-y-1'>
       <p className=''>Men Printed Pure Cotton Straight Kurta</p>
              <p className=' opacity-60 text-xs font-semibold '>Size:M</p>
              <p className=' opacity-60 text-xs font-semibold '>Color: Black</p>
              <p>₹600</p>
       </div>
       </div>

         </Grid>
         <Grid item className=' hover:underline cursor-pointer' >
              <Box sx={{color:"deeppink"}} >
                     <StarIcon sx={{fontSize:'2rem'}} />
                     <span>Rate and Review Product</span>
              </Box>
         </Grid>
</Grid>
        )}
        </Grid>
    </div>
  )
}

export default OrderDetails