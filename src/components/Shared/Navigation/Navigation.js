import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import {  useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';



export default function Navigation() {
 
     // use auth declare
  const {user, logOut} = useAuth();

  const theme = useTheme()
   const useStyle = makeStyles({

    navIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none !important'
          }
    }, 
    navItemContainer:{
        [theme.breakpoints.down('sm')]: {
            display: 'none !important'
          } 
    }, 
     navLogo: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'right'
          } 
     }


   })
  
  const { navIcon , navItemContainer, navLogo } = useStyle()

  // drawer state declare
  const [state, setState] = React.useState(false);



// use drawer list
   
  const list = (
    <Box
      sx={{ width: 250, backgroundColor: '#4ECAED' }}
      role="presentation"
     
    >
      <List>
          <ListItem button >
            
            <ListItemText >
            <Link  style={{textDecoration: 'none', color: 'white'}}  to="/home"> <Button color="inherit">Home</Button> </Link>
            </ListItemText > 
            </ListItem>
            <Divider />

            <ListItem button >
            <ListItemText >
            <Link  style={{textDecoration: 'none', color: 'white'}}  to="/products"> <Button color="inherit">Products</Button> </Link>
            </ListItemText >
            </ListItem>
            <Divider />

            <ListItem button >
            <ListItemText >
            <Link  style={{textDecoration: 'none', color: 'white'}}  to="/contact"> <Button color="inherit">Contact</Button> </Link>
            </ListItemText > 
            </ListItem>
            <Divider />


               {
                        user?.email ?
                        <>
                           <ListItem button >
                             <ListItemText >
                              <NavLink style={{textDecoration: 'none', color: 'white'}} to="/dashboard"><Button color="inherit">Dashboard</Button> </NavLink>
                              </ListItemText >           
                           </ListItem>
                           <Divider />
          
                           <ListItem button >
                             <ListItemText >
                              <NavLink style={{textDecoration: 'none', color: 'white'}} to="/dashboard"><Button color="inherit">{user.displayName}</Button> </NavLink>
                              </ListItemText >           
                           </ListItem>
                           <Divider />
          

                           <ListItem button >
                             <ListItemText >
                             <Button style={{ color: 'white'}} onClick={logOut} color="inherit">Log Out</Button> 
                             </ListItemText >           
                           </ListItem>
                           
        
                        </>
                        
                        :

                      <ListItem button >
                        <ListItemText >
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login"><Button color="inherit">Login</Button> </NavLink>
                        </ListItemText >           
                      </ListItem>
                 } 

          <Divider />
      </List>

    </Box>
  );





    return (
      <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{p:2}}> 
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  className={navIcon}
                  onClick={() => setState(true)}
                >
                  <MenuIcon />
                </IconButton>
                   
                   <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   <img style={{ width: '65px', height: '50px', marginRight: '12px'}} src="https://i.ibb.co/RP63TbK/filename.png"  alt="bike" />
                       MoToZ
                    </Typography>
               
                <Box className={navItemContainer}>
                
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/home"> <Button color="inherit">Home</Button> </Link>
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/products"> <Button color="inherit">Products</Button> </Link>
                    <Link  style={{textDecoration: 'none', color: 'white'}}  to="/contact"> <Button color="inherit">Contact</Button> </Link>
                    
                  {
                        user?.email ?
                        <>
                              <NavLink style={{textDecoration: 'none', color: 'white'}} to="/dashboard"><Button color="inherit">Dashboard</Button> </NavLink>                           
                              <span style={{fontSize: 20}}>{user.displayName}</span>
                             <Button onClick={logOut} color="inherit">Log Out</Button> 
                        </>
                        :
                        <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login"><Button color="inherit">Login</Button> </NavLink>
                    } 
                </Box>            
              </Toolbar>
            </AppBar>
          </Box>


          {/* use drawer */}
          <div>          
              <React.Fragment>
                <Drawer                 
                  open={state}
                  onClose={() => setState(false)}
                >
                  {list}
                </Drawer>
              </React.Fragment>
         </div>
        </>
  );
}








