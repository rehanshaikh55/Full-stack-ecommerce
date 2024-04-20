import React from 'react'
import { Grid } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className=' px-10 py-5 shadow-md  hover:shadow-lg border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
           <Grid sx={6} item>
             <div className=' flex cursor-pointer '>
                <img className=' h-[5rem] w-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="" />
             <div className='ml-5 space-y-2'>
              <p className=''>Men Printed Pure Cotton Straight Kurta</p>
              <p className=' opacity-60 text-xs font-semibold '>Size:M</p>
              <p className=' opacity-60 text-xs font-semibold '>Color: Black</p>
             </div>
             </div>
            </Grid>    
            <Grid item xs={2}>
                    <p>₹600</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p className=' space-x-2'>
                    <DoneIcon className=' text-green-500 font-bold text-lg' sx={{height:'30px',width:'30px'}} />
                    <span>Delivered On March 29</span>
                </p>
                <p className=' text-xs pl-2'>
                    Your item has been Delivered
                </p>
                    </div>}
                {false &&<p className=' space-x-2'>
                    
                    <AdjustIcon className=' text-blue-500 font-bold ' sx={{height:'30px',width:'30px'}} />
                    <span> Expected deliver On March 29</span>
                </p>}
            </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
