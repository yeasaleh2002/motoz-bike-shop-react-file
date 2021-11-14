import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const {_id, name, picture, company, about, price} = product;




    return (

            <Grid item xs={12} sm={6} md={4}>
              <Paper elevation={3} sx={{py: 1}}>
               
                      <CardMedia
                            component="img"
                            style={{ width: '100%', height: '100%', margin: '0 auto' }}
                            image={picture}
                            alt="green iguana"
                        />

                        <CardContent>
                        <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h4" gutterBottom component="div">
                                {name}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                                Price: ${price}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                             brand: {company}
                        </Typography>
                        <Typography variant="caption" display="block" gutterBottom >
                                {about}
                        </Typography>
                        
             
                   {/* purchase button */}
                    <Button variant="contained">
                        <Link  style={{textDecoration: 'none', color:"white"}} to={`/purchase/${_id}`}>
                        Buy Now 
                        </Link>
                    </Button>
                                       
                        </CardContent>
         
              </Paper>  
            </Grid>

        
    );
};

export default Product;