import { Alert, Button, CardContent, CardMedia, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';



const Purchase = () => {


    const { user } = useAuth();
    
    const { purchaseId } = useParams();

    // initial state declare
    const initialInfo = {userName: user.displayName, email: user.email, phone: '', address: ''}

    // order info state declare
    const [orderInfo, setOrderInfo] = useState(initialInfo);

   // success message
    const [orderSuccess, setOrderSuccess] = useState(false)


    // parchase data load state declare
    const [purchase, setPurchase] = useState({});

   // load data
    useEffect(() => {
        fetch(`http://localhost:5000/products/${purchaseId}`)
          .then(res => res.json())
        
          .then(data => setPurchase(data));
      }, []); 


  // handle on Blur 
      const handleOnBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newInfo = {...orderInfo};
        newInfo[field] = value;
        setOrderInfo(newInfo);
        console.log(newInfo);
     
    } 




      const handlePurchase = event => {
        alert ('Purchasing');


        // collect data
        const order = {
          ...orderInfo,
          purchaseId,
          orderName: purchase.name,
      }
         console.log(order)


         // send to the server 
        fetch('http://localhost:5000/oders', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(order)
     })
     .then(res => res.json())
     .then( data => {

         if(data.insertedId) {           
            setOrderSuccess(true);
        }        
     })      
        event.target.reset();
        event.preventDefault();
      }


    return (
        <Container sx={{py: 4, mt: 4, mb: 12}}>
                     <h1 style={{color: 'red' }}> Purchase </h1>
            <Paper elevation={3} sx={{pt: 1,mb:12, mt: 4}}>
               
               <CardMedia
                     component="img"
                     style={{ width: '100%', height: '100%', margin: '0 auto' }}
                     image={purchase.picture}
                     alt="green iguana"
                 />

                 <CardContent>
                 <Typography sx={{color: 'info.main', fontWeight: 'bold'}} variant="h5" gutterBottom component="div">
                         {purchase.name}
                 </Typography>
                 <Typography variant="h6" gutterBottom component="div">
                       Price:   ${purchase.price}
                 </Typography>
                 <Typography variant="h6" gutterBottom component="div">
                       Brand: {purchase.company}
                 </Typography>
                 <Typography variant="caption" display="block" gutterBottom >
                         {purchase.about}
                 </Typography>
                         
                 </CardContent>
  
         </Paper>  


         {orderSuccess && <Alert severity="success">Order successfully!</Alert>}
         <Box>
           <Paper elevation={3} sx={{p: 3}}>
               <Container>
          <Typography sx={{ ml: 2}}  variant="h4" component="h2">
           Product Name:  {purchase.name}
          </Typography>
          
        
        
          {/*---------- using form from metariul ui---------- */}
           
           <form onSubmit={handlePurchase}>
          

              <TextField
                   sx={{width: "85%", m: 1}}
                  disabled
                  id="outlined-size-small"
                  defaultValue={purchaseId}
                  size="small"
              />

              <TextField
                  sx={{width: "85%", m: 1}}               
                  id="outlined-size-small"
                  name="userName"
                  onBlur={handleOnBlur}
                  defaultValue={user.displayName}
                  placeholder="Your Name"
                  size="small"
              />

              <TextField
                  sx={{width: "85%", m: 1}}            
                  id="outlined-size-small"
                  name="email"
                  onBlur={handleOnBlur}
                  defaultValue={user.email}
                  placeholder="Your Email"
                  size="small"
              />

              <TextField
               sx={{width: "85%", m: 1}}              
                id="outlined-size-small"
                name="phone"
                onBlur={handleOnBlur}
                placeholder="Your Phone Number"
                size="small"
              />

              <TextField
               sx={{width: "85%", m: 1}}              
                id="outlined-size-small"
                name="address"
                onBlur={handleOnBlur}
                placeholder="Your Address"
                size="small"
              />

             <br/> <br/>
               <Button sx={{ ml: 2}} type="submit" variant="contained">Purchase</Button>
           </form>
             </Container>
           </Paper>  
        </Box>
           

        </Container>
    );
};

export default Purchase;