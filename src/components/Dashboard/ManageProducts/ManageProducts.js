import { Button, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


   const ManageProducts = () => {

        
            // useState declare
            const [manageProducts, setManageProducts ] = useState([]);


            // data load from database
            useEffect(() => {
                fetch(`http://localhost:5000/products`)
                .then(response => response.json())
                .then(data => setManageProducts(data))
            }, [])



            const handleManageOrder = (id) => {
                fetch(`http://localhost:5000/products/${id}`, {
                  method: "DELETE"
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.deletedCount) {
                      alert ('Cancle Order')
                      const remaining = manageProducts.filter(row => row._id !==id);
                      setManageProducts(remaining);
                    }
                  });
           
              }; 
          
          



    return (
        <Container sx={{my: 8}}> 
            <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Manage Products</Typography>
                <Grid container spacing={2}>
               
                    {
                       manageProducts.map(manageProduct => <Grid item xs={12} sm={6} md={4}
                            key = {manageProduct._id}
                            manageProduct = {manageProduct}  
                                                
                        >
                        
              <Paper elevation={3} sx={{py: 1}}>
               
                      <CardMedia
                            component="img"
                            style={{ width: '100%', height: '100%', margin: '0 auto' }}
                            image={manageProduct.picture}
                            alt="green iguana"
                        />

                        <CardContent>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
                                {manageProduct.name}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                                Price: ${manageProduct.price}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                             brand: {manageProduct.company}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom >
                        {manageProduct.about.slice(0, 205)}.
                        </Typography>
                        
             
                   {/* purchase button */}
                    <Button onClick={() => handleManageOrder(manageProduct._id)} variant="contained">Delete Product</Button>
                                       
                        </CardContent>
         
              </Paper>                            
                        </Grid>)
                    }
                 </Grid>
        </Container>
    );
};

export default ManageProducts;