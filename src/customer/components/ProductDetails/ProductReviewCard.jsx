import React from "react";
import { Avatar, Grid, Box, Rating } from "@mui/material";
const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className=" text-white"
              sx={{ width: 56, height: 56, backgroundColor: "#9155fdd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className=" space-y-2 ml-5">
            <div>
              <p className=" font-semibold text-lg">Rehan</p>
              <p className=" opacity-70 ">April 1st, 2024</p>
            </div>
          </div>
          <div className=" ml-5">
          <Rating value={4.5} name="read-only" readOnly precision={.5} />
          <p>
            very nice product,best qualitiy
          </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
