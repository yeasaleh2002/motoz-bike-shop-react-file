import React from 'react';
import {  Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';




const Review = ({review}) => {

    const {userName, about, reviewValue} = review || '';




    return (
      

        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{p: 2}}>
                
                         
                         <Box>
                            <Rating  name="simple-controlled" value={reviewValue}/>
                       </Box>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h6" gutterBottom component="div">
                            {userName}
                        </Typography>                       
                        <Typography variant="caption"  display="block" gutterBottom >
                         {about}
                        </Typography>                               
              
    </Paper>  
    </Grid>


    );
};

export default Review;



/* 
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}



*/
