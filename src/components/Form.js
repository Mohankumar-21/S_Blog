import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

export function Form(){
      


  const schema = yup.object().shape({
    fullname : yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().required().integer().min(18),
    password : yup.string().min(4).max(10).required(),
    confirmpassword : yup.string().oneOf([yup.ref("password"),null], "passwords don't Match").required(),
  });
 

  const {register,handleSubmit , formState : {errors}} =useForm({
    resolver: yupResolver(schema),
  }); 


  const onSubmit = (data)=>{
    console.log(data);
  };

    return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name..."  {...register("fullname")}/>
        <p>{errors.fullname?.message}</p>
        <input type="text" placeholder="Email..." {...register("email")}/><br></br>
        <p>{errors.email?.message}</p>
        <input type="number" placeholder="Age..." {...register("age")}/><br></br>
        <p>{errors.age?.message}</p>
        <input type="Password" placeholder="password..."  {...register("password")}/><br></br>
        <p>{errors.password?.message}</p>
        <input type="password" placeholder="Confirm Password..."   {...register("confirmpassword")}/><br></br> 
        <p>{errors.confirmpassword?.message}</p>
        <input type="Submit" />
    
      </form>
    );
}
