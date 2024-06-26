import React from 'react'
import ContactUsForm from "../../ContactPage/ContactUsForm"

const ContactFromSection = () => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center mt-[200px]'>
        <h1 className='text-4xl font-inter font-semibold'>
          Get in Touch
        </h1>
        <p className=' text-richblack-300 mt-3'>
         We’d love to here for you, Please fill out this form.
        </p>
        <div className='mt-16 w-[600px]'>
          <ContactUsForm/>
        </div>
    </div>
  )
}

export default ContactFromSection