import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'
import "./Home.css"

const InstructorSection = () => {
  return (
    <div className=' py-[120px]'>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-[50%]">
                <img
                    src={Instructor}
                    alt='instructorImage'
                    className='shadow-white instructor-inset-shadow'
                />
            </div>

            <div className="lg:w-[50%] flex gap-10 flex-col">
                <div className="lg:w-[50%] text-4xl font-semibold ">
                    Become an
                    <br></br>
                    <HighlightText text={" instructor"} />
                </div>

                <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
                    Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </p>

                <div className='w-fit'>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div className='flex items-center gap-2'>
                            Start Teaching Today 
                            <FaArrowRight/>
                        </div>
                    </CTAButton>
                </div>

            </div>
        </div>
    </div>
  )
}

export default InstructorSection