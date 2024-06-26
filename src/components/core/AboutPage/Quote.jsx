import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=' text-richblack-100'>
        We are passionate about revolutionizing the way we learn. Our <br/> innovative platform {" "}
        <HighlightText text={"combines technology"} />
        <span className=' text-orange-5'>
            {" "}
            expertise
        </span>
        , and community to create an 
        <span className=' text-orange-10'>
            {" "}
            unparalleled educational experience.
        </span>
    </div>
  )
}

export default Quote