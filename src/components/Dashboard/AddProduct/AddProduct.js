import React from 'react';
import './AddProduct.css';
import axios from 'axios';
import { useForm } from "react-hook-form";



const AddProduct = () => {



   /* useForm state declare */
   const { register, handleSubmit, reset } = useForm();

   /* onSubmit handle declare */
   const onSubmit = data => {
       console.log(data);
       axios.post('http://localhost:5000/products', data )
       .then(res => {
           if(res.data.insertedId) {
               alert('added successfully');
               reset();
           }
       })
   }



    return (
        <div style={{ margin: '60px'}} className="add-product">
      
            <h1 >Please Add A Product</h1>
          
          {/* add Product form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("picture")} placeholder="bike image link"/>
                <input {...register("name", { required: true, maxLength: 40 })} placeholder="Bike Name" />
                <input type="number" {...register("price")} placeholder="Enter Price"/>
                <input {...register("company")} placeholder="Company Name" />
                <textarea {...register("about")} placeholder="bike description"/>              
                <input className="submit-button" type="submit" />
            </form>

      </div>
    );
};

export default AddProduct;