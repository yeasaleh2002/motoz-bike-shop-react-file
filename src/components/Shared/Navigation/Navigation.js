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
import useAuth from '../../../hooks/useAuth';



const Navigation = () => {

   const {user, logOut} = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                
               
                <img style={{ width: '65px', height: '50px', marginRight: '12px' }} src="https://i.ibb.co/RP63TbK/filename.png"  alt="bike" />
                   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       MoToZ
                    </Typography>
              
             
                     
                    
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/home"> <Button color="inherit">Home</Button> </Link>
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/products"> <Button color="inherit">Products</Button> </Link>
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/contact"> <Button color="inherit">Contact</Button> </Link>
                    {/* <Link  style={{textDecoration: 'none', color: 'white'}}  to="/dashboard"> <Button color="inherit">Dashboard</Button> </Link> */}
                    {/* <Link  style={{textDecoration: 'none', color: 'white'}}  to="/login"> <Button color="inherit">Login</Button> </Link> */}
             

          
                
                  {
                        user?.email ?
                        <Box>
                              <NavLink style={{textDecoration: 'none', color: 'white'}} to="/dashboard"><Button color="inherit">Dashboard</Button> </NavLink>
                            
                             <Button onClick={logOut} color="inherit">Log Out</Button> 
                        </Box>
                        
                        :
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login"><Button color="inherit">Login</Button> </NavLink>
                    } 
   
                  
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;