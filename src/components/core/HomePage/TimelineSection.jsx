import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"
import "./Home.css"


const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully committed to the success company ",

    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description: "Students will always be our top priority ",

    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description: "The ability to switch is an important skills ",

    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description: "Code your way to a solution ",

    },
]

const TimelineSection = () => {
  return (
    <div>
        <div className='flex flex-row gap-16 items-center'>
            {/* left part of this section */}
            <div className='lg:w-[45%] flex flex-col gap-1 lg:gap-5'>
                    {
                        timeline.map( (element, index) => {
                            return (
                                <div className='flex flex-row gap-6' key={index}>

                                    <div className='w-[50px] h-[50px] bg-white flex flex-col items-center'>
                                        <img src={element.Logo} alt='img'/>
                                        {
                                            (index < timeline.length - 1) && (
                                                <div className='w-[38px] mt-[22px]  -rotate-90 border border-dashed'></div>
                                            )
                                        }
                                    </div>

                                    <div>
                                        <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                        <p className='text-base'>{element.Description}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
            </div>
            
            {/* right part of this section */}
            <div className='hidden md:block relative shadow-custom-shadow'>
                <div className=' hidden lg:block absolute w-[640px] h-[479px] -ml-3 rounded-full blur-lg -rotate-0 opacity-60 inset-0 bg-custom-gradient-2'></div>
                <img src={timelineImage} alt='img'
                className='shadow-white relative z-10 object-cover h-fit'></img>

                <div className='absolute z-10 bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                                left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold font-inter'>10</p>
                        <p className=' text-caribbeangreen-300 text-sm'>Years of Experience</p>
                    </div>

                    <div className='flex gap-5 items-center px-7'>
                        <p className='text-3xl font-bold font-inter'>250</p>
                        <p className=' text-caribbeangreen-300 text-sm'>Types of courses</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default TimelineSection