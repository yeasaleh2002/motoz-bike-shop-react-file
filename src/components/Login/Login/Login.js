import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink  , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {

    const [loginData , setLoginData] = useState({})

     const {user , loginUser, isLoading, authError} = useAuth();

     //  redirect after login
      const location = useLocation();
      const history = useHistory();


    const handleOnChange = event => {

        const field = event.target.name;
        const value = event.target.value;
        console.log(field, value)

        // password o email ar data ak sate object akar a paite ... use kora hoise.
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
       // event.preventDefault();
    }

    const handleLoginSubmit = event => {
         
        loginUser(loginData.email, loginData.password , location, history);

        event.preventDefault();
    }
 


    return (
        <div>

             <Container>
                 <Grid sx={{my: 8}} container spacing={2}>
                     <Grid  item xs={12} md={6}>
                       <Typography sx={{fontSize: '49px', fontWeight: 'bold' }}  variant="body1" gutterBottom>Login</Typography>  

                       <form onSubmit={handleLoginSubmit}>
                      
                          <TextField 
                           sx={{width: '75%', m:1}}
                           required
                           id="standard-basic"
                           label="Your Email" 
                           name="email"
                           type="email"
                           onChange={handleOnChange}
                           variant="standard" 
                           />

                          <TextField 
                            sx={{width: '75%', m:1}}
                            required
                            id="standard-basic"
                            label="Password" 
                            type="password"
                            autoComplete="current-password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" 
                         /> 
     
                         <br/>
                         <Button sx={{width: '75%', m:1}} type="submit" variant="contained"> Login </Button> <br/>
                         <NavLink style={{textDecoration: 'none'}} to="/register">  <Button variant="text">New user? Please Register</Button> </NavLink>
                       </form>
                        
                         {/* is loading using */}
                       {isLoading && <CircularProgress />}
                     
                     {/* success fully login and register message */}
                     {user?.email && <Alert severity="success">User Login Successfully</Alert>}
                 
                     {/* error message */}
                     {authError && <Alert severity="error">{authError}</Alert> }
                     
                     </Grid>


                     <Grid sx={{mb: 5, p: 3}} item xs={12} md={6}>
                        <img  style={{width: "100%", height: "100%"}}  src="https://i.ibb.co/h9Dw30t/login.png" alt="login"/>
                     </Grid>
                 </Grid>
             </Container>
        </div>
    );
};

export default Login;