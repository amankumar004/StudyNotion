import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword } from '../services/operations/authAPI';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import PasswordChecklist from '../components/core/Auth/PasswordChecklist';
import "../App.css"
import { FaArrowLeftLong } from 'react-icons/fa6';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {loading} = useSelector( (state) => state.auth);
    const [formData, setFormData] = useState({
        password:"",
        confirmPassword: "",
    })

    const {password, confirmPassword} = formData;

    const handleOnChange = (e) => {
        setFormData( (prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value,
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token, navigate));
    }

  return (
    <div className='flex flex-col justify-center items-center w-full max-w-md mx-auto mt-[85px] pt-10'>
        {
            loading ? (
                <div>
                    Loading...
                </div>
            ) : (
                <div>
                    <h1 className=' text-richblack-5 text-2xl font-semibold'
                        >Choose new Password</h1>
                    <p className='text-richblack-100 text-sm mt-3 w-[350px]'>
                        Almost done. Enter your new password and youre all set.
                    </p>

                    <form onSubmit={handleOnSubmit}>

                        <label>
                            <p className=' text-richblack-5 text-xs mt-5'>
                                New Password <sup className="text-pink-200">*</sup></p>
                            <input 
                                required
                                type={showPassword ? "text" : "password"}
                                name='password'
                                value={password}
                                onChange={handleOnChange}
                                placeholder='Password'
                                className='w-full py-3 text-richblack-25 text-sm pl-3 bg-richblack-800 shadow-custom-inset rounded-md mt-2 focus:outline-none focus:border-blue-500'
                            />

                            <span
                                onClick={() => setShowPassword((prev) => !prev)}    
                            >
                                {
                                    showPassword ? <AiFillEyeInvisible fontSize={24}/> : <AiFillEye fontSize={24} />
                                }
                            </span>
                        </label>


                        <label>
                            <p className=' text-richblack-5 text-xs'
                            >Confirm New Password <sup className="text-pink-200">*</sup></p>
                            <input 
                                required
                                type={showPassword ? "text" : "password"}
                                name='confirmPassword'
                                value={confirmPassword}
                                onChange={handleOnChange}
                                placeholder='Confirm Password'
                                className='w-full py-3 text-richblack-25 text-sm pl-3 bg-richblack-800 shadow-custom-inset rounded-md mt-2 focus:outline-none focus:border-blue-500'
                            />

                            <span
                                onClick={() => setShowConfirmPassword((prev) => !prev)}    
                            >
                                {
                                    showConfirmPassword ? <AiFillEyeInvisible fontSize={24}/> : <AiFillEye fontSize={24} />
                                }
                            </span>
                        </label>

                        <div className="password-guidelines">
                        <p className='text-richblack-100 text-sm w-[350px]'
                            >To create a secure password, follow these guidelines:</p>
                        <div className="password-checklist-container">
                            <div className="checklist-column">
                            <PasswordChecklist text={"one lowercase character"} />
                            <PasswordChecklist text={"one uppercase character"} />
                            <PasswordChecklist text={"one number"} />
                            </div>
                            <div className="checklist-column">
                            <PasswordChecklist text={"one special character"} />
                            <PasswordChecklist text={"8 character minimum"} />
                            </div>
                        </div>
                        </div>

                        <button type='submit' className='mt-6 w-full bg-yellow-50 text-black py-2 rounded-md hover:scale-95 transition-all duration-200'>
                            Reset Password
                        </button>

                        <div className='flex mt-3'>
                            <Link to={"/login"} className='flex justify-center items-center gap-1 text-sm hover:underline text-richblack-5'>
                                <FaArrowLeftLong/>
                                <p> Back to Login </p>
                            </Link>
                    </div>
                        
                    </form>
                </div>
            )
        }
    </div>
  )
}

export default UpdatePassword