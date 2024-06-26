import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { FaArrowLeftLong } from 'react-icons/fa6';

const VerifyEmail = () => {
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {signupData, loading} = useSelector( (state) => state.auth)

    useEffect( () => {
        if(!signupData){
            navigate("/signup")
        }
    })
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData

        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate));
    }

  return (
    <div className='flex flex-col justify-center items-center w-full max-w-md mx-auto mt-[100px] pt-10 gap-6'>
        {
            loading ? (
                <div>
                    Loading...
                </div>
            ) 
            : (
                <div className='w-full px-8'>
                    <h1 className=' text-richblack-5 text-2xl font-semibold'>
                        Verify Email
                    </h1>
                    <p className='text-richblack-100 text-sm mt-2'
                     >A verification code has been sent to you. Enter the code below</p>
                    <form onSubmit={handleOnSubmit} className='mt-6 flex flex-col items-center gap-4'>
                        <div className='flex items-center justify-center w-[400px] h-[48px] gap-[20px] text-white'>
                            <OTPInput 
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span className='mx-2'></span>}
                                renderInput={(props) => <input 
                                        {...props}
                                        className=' w-12 py-3 text-center text-lg text-white bg-richblack-800 border border-richblack-800 rounded-md shadow-custom-inset focus:outline-none focus:border-blue-500'
                                        placeholder='-'
                                    />}
                                inputStyle={{
                                    width: "",
                                }}  
                            />
                        </div>

                        <button type='submit' className='mt-4 w-full bg-yellow-50 text-black py-2 rounded-md font-semibold hover:scale-95 transition-all duration-200'>
                            Verify Email
                        </button>
                    </form>

                    <div className='flex justify-between items-center mt-4 text-richblack-300'>
                        <div className='flex justify-center items-center gap-1'>
                            <Link to={'/login'} className='flex justify-center items-center gap-1 text-sm hover:underline text-richblack-5'>
                                <FaArrowLeftLong/>
                                <p>Back to Login</p>
                            </Link>
                        </div>

                        <button 
                            onClick={() => dispatch(sendOtp(signupData.email, navigate))}
                            className='hover:underline text-blue-200 text-sm flex items-center justify-center gap-1'
                        >
                            <RxCounterClockwiseClock/>
                            Resend it
                        </button>
                    </div>


                </div>
            )
        }    
    </div>
  )
}

export default VerifyEmail