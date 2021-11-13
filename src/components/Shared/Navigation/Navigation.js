import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import { borderRadius, height } from '@mui/system';
//import useAuth from '../../../hooks/useAuth';



const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: "100%"
}



const Navigation = () => {

   //const {user, logOut} = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={4}>
                <img style={{ width: '65px', height: '50px', borderRadius: "50%", marginRight: '12px' }} src="https://i0.wp.com/www.differencebetween.com/wp-content/uploads/2011/06/Difference-Between-Scooter-and-Motorbike_Motorbike.jpg"  alt="bike" />
                   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       MOTOZ
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8} style={verticalCenter} >
                     
                    
                <Link  style={{textDecoration: 'none', color: 'white'}}  to="/home"> <Button color="inherit">Home</Button> </Link>
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/products"> <Button color="inherit">Products</Button> </Link>
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/blogs"> <Button color="inherit">Blogs</Button> </Link>
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/contact"> <Button color="inherit">Contact</Button> </Link>
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/dashboard"> <Button color="inherit">Dashboard</Button> </Link>
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/login"> <Button color="inherit">Login</Button> </Link>
                </Grid>

            </Grid>
                
               {/*   {
                        user?.email ?
                        <Box>
                              <NavLink style={{textDecoration: 'none', color: 'white'}} to="/dashboard"><Button color="inherit">Dashboard</Button> </NavLink>
                             <Button onClick={logOut} color="inherit">Log Out</Button> 
                        </Box>
                        
                        :
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login"><Button color="inherit">Login</Button> </NavLink>
                    } */}
   
                  
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;