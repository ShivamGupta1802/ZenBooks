"use client";

import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const defaultFormData = {
  name: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [formdata, setformdata] = useState(defaultFormData);

  const inputStyle =
    "border border-grey-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";
  

  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setformdata({...formdata,[name]:value})
  }

  const handleSubmit= async (e)=>{
       e.preventDefault();
       try{
        // const user=await signUp(formdata)
        // if(user)
        // toast.success('Success. Please sign in');
        console.log(formdata);
       }
       catch(error){
            console.log(error);
            // toast.error("Something went Wrong");
       }
       finally{
        setformdata(defaultFormData);
       }
  }



  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an Account
          </h1>
          <p>Or</p>
          <span className="inline-flex items-center">
            <AiFillGithub className="mr-3 text-4xl cursor-pointer text-black dark:text-white" />
            |
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formdata.name}
            placeholder="Shivam Gupta"
            required
            className={inputStyle}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={formdata.email}
            placeholder="name@company.com"
            required
            className={inputStyle}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={formdata.password}
            placeholder="password"
            required
            className={inputStyle}
            minLength={6}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm pz-5 py-2.5 text-center"
          >
            Sign Up
          </button>
        </form>
        <button className="text-blue-700 underline">Login</button>
      </div>
    </section>
  );
};

export default Auth;
