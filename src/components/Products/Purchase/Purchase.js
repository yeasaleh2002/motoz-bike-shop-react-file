import { CardContent, CardMedia, Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {


    
    const { purchaseId } = useParams();

    
    const [purchase, setPurchase] = useState({});

   // load data
    useEffect(() => {
        fetch(`http://localhost:5000/products/${purchaseId}`)
          .then(res => res.json())
        
          .then(data => setPurchase(data));
      }, []); 



    return (
        <Container sx={{py: 4, my: 4}}>
                     <h1 style={{color: 'red' }}> Purchase </h1>
            <Paper elevation={3} sx={{py: 1, my: 4}}>
               
               <CardMedia
                     component="img"
                     style={{ width: '100%', height: '100%', margin: '0 auto' }}
                     image={purchase.picture}
                     alt="green iguana"
                 />

                 <CardContent>
                 <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
                         {purchase.name}
                 </Typography>
                 <Typography variant="h6" gutterBottom component="div">
                       Price:   ${purchase.price}
                 </Typography>
                 <Typography variant="h6" gutterBottom component="div">
                       Brand: {purchase.company}
                 </Typography>
                 <Typography variant="caption" display="block" gutterBottom >
                         {purchase.about}
                 </Typography>
                         
                 </CardContent>
  
         </Paper>  
        </Container>
    );
};

export default Purchase;