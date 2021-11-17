import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../../Products/Product/Product';


const HomeProducts = () => {

        
// useState declare
const [products, setProducts ] = useState([]);


// data load from database
 useEffect(() => {
      fetch(`https://sleepy-escarpment-80710.herokuapp.com/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
 }, [])




    return (
        <Container sx={{my: 8}}> 
            <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Products</Typography>
                        
                <Grid container spacing={2}>
                    {
                           products.slice(1, 7).map(product => <Product
                            key = {product._id}
                            product = {product}  
                                                
                        >
                            
                        </Product>)
                    }
                </Grid>
        </Container>
    );
};

export default HomeProducts;