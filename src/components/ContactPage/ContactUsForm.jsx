import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import apiConnector from "../../services/apiConnector"
import { contactusEndpoint } from '../../services/apis';
import CountryCode from "../../data/countrycode.json"
import toast from 'react-hot-toast';

const ContactUsForm = () => {
    const [loading, setLoading] = useState(false);
    const {
        register, 
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const submitContactForm = async (data) => {
        console.log("Logging Data", data);
        try{
            setLoading(true);
            setLoading(true)
            const res = await apiConnector(
                "POST",
                contactusEndpoint.CONTACT_US_API,
                data
            )
            // const response = {status:"ok"}
            // console.log("Logging response", response);
            // setLoading(false);
            toast.success("Thanks for reaching out!");
        } catch(error){
            console.log("Error: ", error.message);
            setLoading(false)
        }
    }

    useEffect( () => {
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                phoneNo:"",
            })
        }
    },[reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>

        <div className='flex flex-col gap-14'>
            <div className='flex gap-5 justify-center items-center'>
                {/* firstname */}
                <div className='flex flex-col'>
                    <label htmlFor='firstname' className='text-sm text-richblack-25'>First Name</label>
                    <input
                        type='text'
                        name='firstname'
                        id='firstname'
                        placeholder='Enter first name'
                        {...register("firstname", {required:true})}
                        className=' w-[258px] py-3 text-richblack-25 text-sm pl-3 bg-richblack-800 shadow-custom-inset rounded-md mt-2'
                    />
                    {
                        errors.firstname && (
                            <span className='mt-2 text-red-10'>
                                Please enter your name
                            </span>
                        )
                    }
                </div>
                {/* lastname */}
                <div className='flex flex-col'>
                    <label htmlFor='lastname' className='text-sm text-richblack-25'>Last Name</label>
                    <input
                        type='text'
                        name='lastname'
                        id='lastname'
                        placeholder='Enter last name'
                        {...register("lastname")}
                        className=' w-[258px] py-3 text-richblack-25 text-sm pl-3 bg-richblack-800 shadow-custom-inset rounded-md mt-2'
                    />
                </div>
            </div>

            {/* email */}
            <div className='flex flex-col items-center'>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='text-sm text-richblack-25'>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter email Address'
                        {...register("email", {required:true})}
                        className=' w-[536px] py-3 text-richblack-25 text-sm pl-3 bg-richblack-800 shadow-custom-inset rounded-md mt-2'
                    />
                    {
                        errors.email && (
                            <span className='mt-2 text-red-10'>
                                Please enter your email address
                            </span>
                        )
                    }
                </div>
            </div>

            {/* phone no */}
            <div className='flex flex-col gap-2 items-center'>
                <div className='flex flex-col'>
                    <label htmlFor='phoneNo' className='text-sm text-richblack-25'>Phone Number</label>

                    <div className='flex flex-row gap-5'>
                        {/* dropdown */}
                        <div>
                            <select
                            className='w-[81px] py-3 text-richblack-25 text-sm pl-3 bg-richblack-800 shadow-custom-inset rounded-md mt-2'
                            name='dropdown'
                            id='dropdown'
                            {...register("countrycode", {required:true})}>
                                {
                                    CountryCode.map( (element, index) => {
                                        return (
                                            <option key={index} value={element.code} className=' bg-richblack-700 text-white'>
                                                {element.code} - {element.country}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <input
                                className='w-[436px] py-3 text-richblack-25 text-sm pl-3 bg-richblack-800 shadow-custom-inset rounded-md mt-2'
                                type='number'
                                name='phonenumber'
                                id='phonenumber'
                                placeholder='12345 67890'
                                {...register("phoneNo", 
                                    {required:{value:true, message:"Please enter Phone Number"},
                                    maxLength:{value:10, message:"Invalid Phone Number"},
                                    minLength:{value:8, message:"Invalid Phone Number"}})}

                            />
                        </div>
                        {
                            errors.phoneNo && (
                                <span className='mt-2 text-red-10'>
                                    {errors.phoneNo.message}
                                </span>
                            )
                        }
                    </div>
                </div>
            </div>


            {/* message box */}
            <div className='flex flex-col items-center'>
                <div className='flex flex-col'>
                    <label htmlFor='message' className='text-sm text-richblack-25'>Message</label>
                    <textarea
                        className='w-[536px] py-3 text-richblack-25 text-sm pl-3 bg-richblack-800 shadow-custom-inset rounded-md mt-2'
                        name='message'
                        id='message'
                        cols="30"
                        rows="7"
                        placeholder='Enter your message here..'
                        {...register("message", {required:true})}
                    />
                    {
                        errors.message && (
                            <span className='mt-2 text-red-10'>
                                Please enter your message.
                            </span>
                        )
                    }
                </div>
            </div>
            
            <div className='flex items-center justify-center'>
                <button type='submit' className='lg:w-[536px] bg-yellow-50 text-black py-2 rounded-md text-center
                    hover:scale-95 transition-all duration-200'>
                    Send Message
                </button>
            </div>
        </div>

    </form>
  )
}

export default ContactUsForm