import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import About from '../About/About';

const Contact = () => {
    return (
        <div  style={{ backgroundColor: 'whitesmoke'}}>
            
            <About></About>
                 
             
            <Grid  sx={{p: 5}} container spacing={2}>
                <Grid  item  xs={12} md={6}>


                <Grid  sx={{p: 5}} container spacing={2}>
                           {/* dhaka office */}
                         <Grid  sx={{fontSize: 18}} item  xs={12} md={6}>                      
                         <h2 >Dhaka Office</h2>
                            <p > <i className=" fas fa-phone-square-alt"></i> +00947370563655 </p>
                            <p> <i className=" far fa-envelope"></i> motoz.dhaka@gmail.com </p>
                            <p> <i className=" fas fa-map-marked-alt"></i> 2653, Mirput , Dhaka</p>
                            <p> <i className=" fas fa-clock bg-warning"></i> Working Hour- 24/7 </p>    
                         </Grid>
                        
                        {/* Rajshahi office */}
                         <Grid sx={{fontSize: 18}}  item  xs={12} md={6}>
                         <h2 className=" text-light mb-3 text-center">Rajshahi Office</h2>
                                <p> <i className=" fas fa-phone-square-alt"></i> +0094737564564 </p>
                                <p> <i className=" far fa-envelope"></i> motoz.rajshahi@gmail.com </p>
                                <p> <i className=" fas fa-map-marked-alt"></i> 213, city , Rajshahi</p>
                                <p> <i className=" fas fa-clock bg-warning"></i> Working Hour- 24/7 </p> 
                         </Grid>
                     </Grid>                                
                  </Grid>

            {/* message form */}
            <Grid  item  xs={12} md={6}>
            <form >

                    <TextField
                        sx={{width: "90%", m: 1}}                      
                        id="outlined-size-small"
                        placeholder="Name"
                        size="small"
                    />
                    <TextField
                        sx={{width: "90%", m: 1}}               
                        id="outlined-size-small"
                        name="Name"
                        placeholder="Bike Name"
                        size="small"
                    />

                    <TextField
                        sx={{width: "90%", m: 1}}            
                        id="outlined-size-small"
                        name="email"
                        placeholder="Your Email"
                        size="small"   
                    />

                    <TextField
                    sx={{width: "90%", m: 1}}              
                    id="outlined-size-small"
                    name="phone"  
                    placeholder="Your Phone Number"
                    size="small"
                    />

                    <TextField   
                    sx={{width: "90%", m: 1}}
                    id="outlined-size-small"
                    placeholder="Message"
                    size="large"
                    />

                <Button  variant="contained">Message</Button>
                </form>

            </Grid>
            </Grid>

        </div>
    );
};

export default Contact;