import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import './Banner.css';



const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    return (
        <div className="banner" >
        <Container  sx={{ flexGrow: 1 }}>
            <Grid sx={{p:8}} container spacing={2}>
                
                {/* banner discription */}
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography sx={{fontWeight: 500 , mt: 3 }} variant="h3">
                            Buy Your Favourite <br />
                            Bike 
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 18, fontWeight: 400 }}>
                        A motorcycle, often called a motorbike, bike, or cycle, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport, and off-road riding.
                        </Typography>
                        <Link  style={{textDecoration: 'none'}}  to="/products"> <Button variant="contained"  style={{ backgroundColor: '#5CE7ED' }} color="inherit">Products</Button> </Link>
                    </Box>
                </Grid>

                {/* banner image */}
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '100%', borderRadius: '5px' }} src="https://i0.wp.com/www.differencebetween.com/wp-content/uploads/2011/06/Difference-Between-Scooter-and-Motorbike_Motorbike.jpg"  alt="bike" />
                </Grid>

            </Grid>
        </Container>
        </div>
    );
};

export default Banner;