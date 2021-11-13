import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
       <Box>
          <Box   sx={{ backgroundColor: '#292B2C'  }}>
           <Container>
             <Grid container spacing={3}>

                   
                <Grid item xs={12} md={3}>                   
                     <Typography variant="h5" sx={{ mb: 5, mt: 2  }} style={{ color: 'whitesmoke' }}>
                         CONTACT INFO
                     </Typography>
                     <Typography style={{ color: 'white' }}>
                       <b  style={{ color: '#E74C3C', fontSize: '25px' }}>Address : </b>  123 Sky Tower address name, Rajbari, Bangladesh, Country, 01234
                     </Typography>
                     <Typography variant="h6" sx={{ my: 2 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                     <b  style={{ color: '#E74C3C', fontSize: '25px' }}>Phone : </b> 012 345 6789
                     </Typography>
                     <Typography variant="h6" sx={{ my: 2 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                     <b  style={{ color: '#E74C3C', fontSize: '25px' }}>Email : </b> info@templaza.com
                     </Typography>                    
                </Grid>
                     
               
                <Grid sx={{ mt: 2 ,mb: 3}} item xs={12} md={3}>
                    <img style={{ width: '100%', height: '100%', borderRadius: "20px" }} src="https://i.ibb.co/QfgMyDy/Screenshot-155.png"  alt="bike" />
                </Grid>


                <Grid item xs={12} md={3}>
                        <Typography variant="h5" sx={{ mb: 4, mt: 2 }} style={{ color: 'whitesmoke' }}>
                            HOW TO BUY
                        </Typography>
                       
                        <Typography variant="h6" >
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/home">Home</NavLink>  
                        </Typography>
                       
                        <Typography variant="h6" >
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/products">Products</NavLink>  
                        </Typography>
                       
                        <Typography variant="h6" >
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/contact">Contact</NavLink>  
                        </Typography>
                       
                        <Typography variant="h6" >
                        <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/login">Login</NavLink>  
                        </Typography>                       
                </Grid>
              
                <Grid item  xs={12} md={3}>
                        <Typography variant="h5"  style={{ color: 'whitesmoke' }}>
                            Message Us
                        </Typography>
                        <Box sx={{backgroundColor: '#CCD1D1', padding: "10px" ,mt: 4, mb: 5, borderRadius: '10px'}}>
                            <TextField id="filled-basic" label="Name" variant="filled" /> <br/>
                            <TextField id="filled-basic" label="Email" variant="filled" /> <br/>
                            <TextField id="filled-basic" label="Phone" variant="filled" /> <br/>
                            <TextField id="filled-basic" label="Message" variant="filled" /> <br/>
                            <Button sx={{marginTop: '10px'}} variant="contained">Contained</Button>               
                        </Box>  
                  </Grid>
                </Grid>              
              </Container>
           </Box>
             
                <Box sx={{paddinTop: '20px'}}> 
                        <Typography variant="h5" style={{ color: 'white' , background: '#40383A', padding: '30px' }}>
                           Copyright © 2021 MOTOZ by Saleh. All rights reserved.
                        </Typography>
                 </Box>
            
        </Box>
    );
};

export default Footer;