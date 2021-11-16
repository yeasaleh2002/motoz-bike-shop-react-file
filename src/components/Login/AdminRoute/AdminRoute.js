import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children , ...rest }) => {

    const { user , admin,  isLoading } = useAuth();

    if(isLoading) {
      return   <CircularProgress />
    }

    return (
         //   private route randering and redirect
       <Route
       {...rest}

       //rendering
       render={({location}) => user.email && admin ? children
       
       : 

        // redirect
        <Redirect to={{
            pathname : "/",
            state : {from: location}
        }}>

        </Redirect>
       }        
        >
       </Route>
    );
};

export default AdminRoute;