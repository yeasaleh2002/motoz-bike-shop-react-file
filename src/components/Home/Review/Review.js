import React from 'react';
/* import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star'; */
import { CardContent, Grid, Paper, Typography } from '@mui/material';

/* const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
}; */


const Review = ({review}) => {

    const {reviewValue, about, userName} = review;

    /* const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1); */


    return (
      

<Grid item xs={12} sm={6} md={4}>
<Paper elevation={3} sx={{py: 1}}>
 
       

          <CardContent>
          <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
                  {userName}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
                  {reviewValue}
          </Typography>
         
          <Typography variant="caption" display="block" gutterBottom >
          {about}.
          </Typography>
          
                         
          </CardContent>

</Paper>  
</Grid>



    );
};

export default Review;



/* 

  <Box
        sx={{
          width: 200,
          my: 5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>


*/