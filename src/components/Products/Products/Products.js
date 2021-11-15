import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

        
// useState declare
const [products, setProducts ] = useState([]);


// data load from database
 useEffect(() => {
      fetch(`http://localhost:5000/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
 }, [])




    return (
        <Container sx={{my: 8}}> 
            <Typography sx={{my: 5, color: 'info.main', fontWeight: '400'}} variant="h4">Products</Typography>
                        
                <Grid container spacing={2}>
                    {
                       products.map(product => <Product
                            key = {product.key}
                            product = {product}  
                                                
                        >

                        </Product>)
                    }
                </Grid>
        </Container>
    );
};

export default Products;