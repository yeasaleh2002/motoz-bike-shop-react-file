import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success , setSuccess] = useState(false);

    const handleOnBlur = event => {
          setEmail(event.target.value)
    }

     const handleAdminSubmit = event => {

        const user = { email };

        fetch('https://sleepy-escarpment-80710.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
                   if(data.modifiedCount) {
                    
                       setSuccess(true);                   
                   }
                })
                event.target.reset();
               event.preventDefault();
            }


    return (
        <div style={{marginBottom: '90px'}}>
            <h1>MakeAdmin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField sx={{width:'50%'}} type="email" onBlur={handleOnBlur} label="Email"  variant="standard"  />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {/* success fully login and register message */}
            {success && <Alert severity="success">Make Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;