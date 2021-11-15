import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const MyOrders = () => {

    const {user} = useAuth();

    const [myOrder, setMyOrder] = useState([]);


    useEffect( () => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then( res => res.json())
        .then( data => setMyOrder(data))
    } , [])

    return (
        <div>
            <h1>Total Orders: {myOrder.length}</h1>

            <TableContainer sx={{mb: 12}} component={Paper}>
      <Table aria-label="myOrders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Service Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Action</TableCell>         
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrder.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="right">{row.orderName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
                   </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrders;