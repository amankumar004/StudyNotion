import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const PasswordChecklist = ({text}) => {
  return (
    <div className='flex'>
        <div className='flex items-center justify-center text-caribbeangreen-200 gap-1 text-xs'>
            <FaCheckCircle/> {text}
        </div>
    </div>
  )
}

export default PasswordChecklist