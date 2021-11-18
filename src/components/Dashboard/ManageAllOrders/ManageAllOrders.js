import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const ManageAllOrders = () => {


    const [manageAllOrders, setManageAllOrders] = useState([]);



    useEffect( () => {
        const url = `https://sleepy-escarpment-80710.herokuapp.com/oders`
        fetch(url)
        .then( res => res.json())
        .then( data => setManageAllOrders(data))
    } , [])

  
    const handleDelete = (id) => {

      const proceed = window.confirm('Are you sure, you want to Delete Order?');
      if (proceed) {
      fetch(`https://sleepy-escarpment-80710.herokuapp.com/oders/${id}`, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert ('Delete Order')
            const remaining = manageAllOrders.filter(row => row._id !==id);
            setManageAllOrders(remaining);
          }
        });
      };
    }; 


    return (
        <div>
            <h1>Total Orders: {manageAllOrders.length}</h1>

            <TableContainer sx={{mb: 12}} component={Paper}>
      <Table aria-label="ManageAllOrders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Service Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>         
          </TableRow>
        </TableHead>
        <TableBody>
          {manageAllOrders.map((row) => (
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
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right"><Button variant="contained" onClick={() => handleDelete(row._id)}> Delete Order </Button></TableCell>
                   </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageAllOrders;