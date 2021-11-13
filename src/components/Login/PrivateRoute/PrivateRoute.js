import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children , ...rest }) => {

    const { user , isLoading } = useAuth();

    if(isLoading) {
      return   <CircularProgress />
    }

    return (
         //   private route randering and redirect
       <Route
       {...rest}

       //rendering
       render={({location}) => user.email ? children
       
       : 

        // redirect
        <Redirect to={{
            pathname : "/login",
            state : {from: location}
        }}>

        </Redirect>
       }        
        >
       </Route>
    );
};

export default PrivateRoute;