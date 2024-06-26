import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Spinner from '../components/common/Spinner';

const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const {loading} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent))
    }

  return (
    <div className='flex flex-col justify-center items-center w-full max-w-md mx-auto mt-[100px] pt-10'>
        {
            loading ? (
                <div className='flex justify-center items-center mt-[200px]'>
                    <Spinner/>
                </div>
            ) : (
                <div className='w-full px-8'>
                    <h1 className=' text-richblack-5 text-2xl font-semibold'>
                        {
                            !emailSent ? "Reset your Password" : "Check your Email"
                        }
                    </h1>

                    <p className='text-richblack-100 text-sm mt-3 w-[350px]'>
                        {
                            !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" 
                            : `We have sent the reset email to ${email}`
                        }
                    </p>

                    <form onSubmit={handleOnSubmit}>
                        {
                            !emailSent && (
                                <label>
                                    <p className=' text-richblack-5 text-xs mt-10'>Email Address: <sup className="text-pink-200">*</sup></p>
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter your Email Address'
                                        className='w-full py-3 text-richblack-25 text-sm pl-3 bg-richblack-800 shadow-custom-inset rounded-md mt-2 focus:outline-none focus:border-blue-500'
                                    />
                                </label>
                            )
                            
                        }

                        <button className='mt-6 w-full bg-yellow-50 text-black py-2 rounded-md hover:scale-95 transition-all duration-200'
                        type='submit'>
                            {
                                !emailSent ? "Reset Password" : "Resend Email"
                            }
                        </button>
                    </form>

                    <div className='flex mt-5'>
                        <Link to={"/login"} className='flex justify-center items-center gap-1 text-sm hover:underline text-richblack-5'>
                            <FaArrowLeftLong/>
                            <p> Back to Login </p>
                        </Link>
                    </div>

                </div>
            )
        }
    </div>
  )
}

export default ForgotPassword