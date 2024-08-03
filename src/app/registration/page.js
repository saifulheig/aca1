/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, {useState} from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useForm } from 'react-hook-form';
import { Password } from 'primereact/password';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
    const [password, setPassword] = useState('');
    const [recaptchaValue, setRecaptchaValue] = useState('');
    const { register, handleSubmit,  formState: { errors } } = useForm(); 
    const [value, setValue] = useState('');

    const onSubmit = async(data) => {
      if(password.length < 6){
          toast.error("Password must be at least 6 characters long", {
              position: "top-center",
              autoClose: 3000,
          });
      } else if (!recaptchaValue) {
        toast.error("Please complete the reCAPTCHA challenge", {
            position: "top-center",
            autoClose: 3000,
        })
       } else {
          if(data.confirmpassword === password){
              const Item = {
                  firstname: data.firstname,
                  lastname: data.lastname,
                  username: data.username,
                  email: data.email,
                  password: data.confirmpassword,
                  role: "instructor"
              }
              fetch('https://vercel-solar.vercel.app/users/register',{
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(Item)
              })
              .then(res => res.json())
              .then(data => {
                  if(data.success){
                      toast.success(data.message, {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          onClose: () => navigate('/login')
                      });
                  } else if(data.status === 400){
                      toast.error(data.message, {
                          position: "top-right",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                      });
                  }
              })
          } else {
              toast.error("Passwords should match each other!! Try again", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
              });
          }
      }
  };


    return (
        <div className='py-32'>
            <div className='max-w-screen-xl  mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center mt-12">
       <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl">
                {/* 1st row  */}
           <div className="  flex gap-5 px-8 pt-10 rounded-lg ">
                <div className="">
                <FloatLabel>
                <InputText
                id="firstname"
                className="h-[44px] w-96 border pl-3"
                {...register("firstname", { required: "First Name is required" })}
                aria-invalid={errors.firstname ? "true" : "false"}
                />{errors.firstname && <p role="alert" className='text-red-600'>{errors.firstname.message}</p>}
                <label htmlFor="firstname" className="">First Name</label>
            </FloatLabel>
                </div>
                <div className="">
                <FloatLabel>
                <InputText
                id="lastname"
                className="h-[44px] w-96 border pl-3"
                {...register("lastname", { required: "Last Name is required" })}
                aria-invalid={errors.lastname ? "true" : "false"}
                />{errors.lastname && <p role="alert" className='text-red-600'>{errors.lastname.message}</p>}
                <label htmlFor="lastname" className="">Last Name</label>
            </FloatLabel>
                </div>
           </div>
           {/* 2nd row  */}
           <div className="px-8 py-8 rounded-lg ">
                <div className="">                            
                <div className="p-inputgroup border">
                <span className="p-inputgroup-addon ">
                    <i className="pi pi-user "></i>
                </span>
                <InputText
                placeholder="User Name"
                className="py-2.5 pl-2 w-full"
                {...register("username", { required: "User Name is required" })}
                aria-invalid={errors.username ? "true" : "false"}
                />
                    </div>
                    <div>{errors.username && <p role="alert" className='text-red-600'>{errors.username.message}</p>}</div>
                </div>
           </div>
           {/* 3rd row */}
           <div className="px-8 mb-2 rounded-lg ">
                <div className="">                            
                <div className="p-inputgroup ">
                <span className="p-inputgroup-addon border ">
                    <i className="pi pi-envelope "></i>
                </span>
                <InputText
                placeholder="Enter a valid Email"
                className="py-2.5 pl-2 w-full border"
                {...register("email", { required: "Email is required" })}
                aria-invalid={errors.email ? "true" : "false"}
                />
                    </div>
                    <div>{errors.email && <p role="alert" className='text-red-600'>{errors.email.message}</p>}</div>
                </div>
            
           </div>
           {/* 4th row  */}
           <div className="px-8 pb-10 flex gap-5 pt-6 rounded-lg ">

         <div className="w-96 h-[44px] py-2.5 rounded-lg border px-4">
                <Password
                className=""
                placeholder="Enter a password"
                inputId="password"
                value={value} onChange={(e) => setValue(e.target.value)}
                toggleMask
                />
            </div>
            <div className="bg-white w-96 h-[44px] py-2.5 rounded-lg border px-4">
            <Password placeholder="Confirm Password" className="w-96" value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
            </div>
           
         </div>
       
       {/* google recaptcha  */}
            <div className="px-8">
            <ReCAPTCHA sitekey="6Lfo8IIpAAAAAImpxGwB5apeC3mAPGyhUfkLmi86"
                            onChange={(value) => {setRecaptchaValue(value);}}
                        />
            </div>

       <div className=" mx-8">
       <button type="submit"
                            className="flex w-full rounded-lg justify-center text-white bg-orange-600  my-8 py-4 px-8 focus:outline-none hover:bg-[#463f93] text-medium font-semibold shadow-lg "
                            >
                            Register
                            </button>
       </div>
       </div>
    
        </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default page;