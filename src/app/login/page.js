/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, {useState} from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { useForm } from 'react-hook-form';
import { Password } from 'primereact/password';
import ReCAPTCHA from "react-google-recaptcha";

const page = () => {
    
    const { register, handleSubmit,  formState: { errors } } = useForm(); 
    const [value, setValue] = useState('');
    const onSubmit = async(data) => {
            console.log(data)
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
            id="name"
            className="h-[44px] w-96 border pl-5"
            {...register("name", { required: "User name or email is required" })}
            aria-invalid={errors.firstname ? "true" : "false"}
            />{errors.firstname && <p role="alert" className='text-red-600'>{errors.firstname.message}</p>}
            <label htmlFor="username" className="">User name or email</label>
        </FloatLabel>
            </div>
            
       </div>
     
       
       {/* 4th row  */}
       <div className="px-8 pb-10 flex gap-5 pt-6 rounded-lg ">

     
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
                        Login
                        </button>
   </div>
   </div>

    </form>
        </div>
    </div>
    );
};

export default page;