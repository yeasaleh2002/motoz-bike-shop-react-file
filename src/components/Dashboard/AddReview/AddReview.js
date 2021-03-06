import React from 'react';
import './AddReview.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


const AddReview = () => {


    const { user } = useAuth();

   /* useForm state declare */
   const { register, handleSubmit, reset } = useForm();

   /* onSubmit handle declare */
   const onSubmit = data => {
       console.log(data);
       axios.post('https://sleepy-escarpment-80710.herokuapp.com/reviews', data )
       .then(res => {
           if(res.data.insertedId) {
               alert('added successfully');
               reset();
           }
       })
   }





    return (
        <div style={{ margin: '60px'}} className="add-review">
      
        <h1 >Please Add A Review</h1>
      
      {/* add Product form */}
        <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("userName", { required: true})} defaultValue={user.displayName} placeholder="Enter Your Name"/>
            <input type="number" {...register("reviewValue", {  min: 0, max: 5 , required: true, maxLength: 1 })} placeholder="Enter Review Value"/>
            <textarea {...register("about")} placeholder="Write Something"/>              
            <input className="submit-button" type="submit" />
        </form>

  </div>
    );
};

export default AddReview;