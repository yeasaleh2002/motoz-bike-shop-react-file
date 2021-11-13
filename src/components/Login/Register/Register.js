import { Button, Container, Grid, Typography,CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Register = () => {
  
    /* login data state declare */
    const [loginData , setLoginData] = useState({})
   
    // redirect for register user -- to home page
    const history = useHistory();

     const { user,authError, registerUser, isLoading } = useAuth();


     /* handleOnBlur part */
    const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        console.log(field, value)

        
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }


    /* handleLoginSubmit part */
    const handleLoginSubmit = event => {
          if(loginData.password !== loginData.password2) {
              alert('password did not match')
              return
          }
         registerUser(loginData.email, loginData.password, loginData.name, history)
        event.preventDefault();
    }



    return (
        <div>
            {/* register form */}
              <Container>
                 <Grid  sx={{my: 8}} container spacing={2}>
                     <Grid item xs={12} md={6}>
                         <Typography sx={{fontSize: '49px', fontWeight: 'bold' }} variant="body1"  gutterBottom>Register</Typography>  

                            {  !isLoading && <form onSubmit={handleLoginSubmit}>                   
                                <TextField 
                                sx={{width: '75%', m:1}}
                                required
                                id="standard-basic"
                                label="Your Name" 
                                name="name"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" 
                                />

                                <TextField 
                                sx={{width: '75%', m:1}}
                                required
                                id="standard-basic"
                                label="Your Email" 
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
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
                                    onBlur={handleOnBlur}
                                    variant="standard" 
                                />
                                
                                                    

                                <TextField 
                                    sx={{width: '75%', m:1}}
                                    required
                                    id="standard-basic"
                                    label="Confirm Password" 
                                    type="password"
                                    autoComplete="current-password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    variant="standard" 
                                /> 
                                
                                
                                <br/>
                                <Button sx={{width: '75%', m:1}} type="submit" variant="contained"> Register </Button>
                                <NavLink style={{textDecoration: 'none'}} to="/login">  <Button variant="text">Already An User? Please Login</Button> </NavLink>
                            </form>}
                                
                                {/* is loading using */}
                                {isLoading && <CircularProgress />}
                            
                                {/* success fully login and register message */}
                                {user?.email && <Alert severity="success">User Login Successfully</Alert>}
                            
                                {/* error message */}
                                {authError && <Alert severity="error">{authError}</Alert> }
                        
                        </Grid>


                     {/* register side bar image */}
                     <Grid sx={{mb: 5, p: 3}} item xs={12} md={6}>
                        <img style={{width: "100%", height: "100%"}}  src="https://i.ibb.co/h9Dw30t/login.png" alt="register"/>
                     </Grid>
                 </Grid>
             </Container>
        </div>
    );
};

export default Register;





