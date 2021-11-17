import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';



const Reviews = () => {

      
// useState declare
const [reviews, setReviews ] = useState([]);


// data load from database
 useEffect(() => {
      fetch(`https://sleepy-escarpment-80710.herokuapp.com/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data))
            
 }, [])


    return (
        <Container sx={{my: 8}}> 
        <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Products Review</Typography>
                    
            <Grid container spacing={2}>
                {
                   reviews.map(review => <Review
                        key = {review._id}
                        review = {review}  
                                            
                    >

                    </Review>)
                }
            </Grid>
    </Container>
    );
};

export default Reviews;