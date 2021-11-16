import React from 'react';
import {  Grid, Paper, Typography } from '@mui/material';




const Review = ({review}) => {

    const {userName, about, reviewValue} = review || '';




    return (
      

        <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{p: 2}}>
                
                       <Typography variant="h6" gutterBottom component="div">
                          {reviewValue}
                        </Typography>
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

