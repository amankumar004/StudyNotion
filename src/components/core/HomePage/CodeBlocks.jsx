// import React from 'react'
// import CTAButton from "../HomePage/Button"
// import { FaArrowRight } from 'react-icons/fa'
// import { TypeAnimation } from 'react-type-animation'
// import "./Home.css"


// const CodeBlocks = ({position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor}) => {
//   return (
//     <div className={`flex ${position} flex-col lg:flex-row my-20 justify-between gap-10`}>

//         {/* section 1 */}
//         <div className='lg:w-[50%] w-[100%] flex flex-col gap-8'>
//             <div className='font-semibold text-4xl w-[100%]'>
//                 {heading}
//             </div>
//             <div className='text-richblack-300 font-bold'>
//                 {subheading}
//             </div>

//             <div className='flex gap-7 mt-7'>
//                 <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
//                     <div className='flex gap-2 items-center'>
//                         {ctabtn1.btnText}
//                         <FaArrowRight/>
//                     </div>
//                 </CTAButton>

//                 <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
//                     {ctabtn2.btnText}
//                 </CTAButton>
//             </div>
//         </div>

//         {/* section 2 */}
//         <div className='relative h-fit flex flex-col lg:flex-row text-10[px] w-[100%] py-4 lg:w-[500px] custom-border-gradient custom-bg-gradient gap-2 z-10'>
//             {/* bg-gradient */}
//             {backgroundGradient}
//             <div className={`absolute inset-0 w-[372px] h-[257px] rounded-full blur-xl -rotate-0 opacity-10 -ml-6 -mt-10`}></div>
//             <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold z-10'>
//                 <p>1</p>
//                 <p>2</p>
//                 <p>3</p>
//                 <p>4</p>
//                 <p>5</p>
//                 <p>6</p>
//                 <p>7</p>
//                 <p>8</p>
//                 <p>9</p>
//                 <p>10</p>
//                 <p>11</p>
//             </div>

//             <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
//                 <TypeAnimation 
//                     sequence={[codeblock, 5000, ""]}
//                     repeat={Infinity}
//                     cursor={true}
//                     style={
//                         {
//                             whiteSpace: "pre-line",
//                             display: "block",
//                         }
//                     }
//                     omitDeletionAnimation={true}

//                 />
//             </div>
//         </div>

//     </div>
//   )
// }

// export default CodeBlocks


import React from 'react'
import CTAButton from '../HomePage/Button'
import HighlightText from './HighlightText'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColour
}) => {
  return (
    <div className={`flex ${position} flex-col lg:flex-row my-20 justify-between gap-10`}>
      {/* LEFT PART */}
      <div className='lg:w-[50%] w-[100%] flex flex-col gap-8'>
        <div className='font-semibold text-4xl w-[100%]'>{heading}</div>
        <div className='text-richblack-300 font-bold text-justify'>{subheading}</div>
        <div className='flex gap-7 mt-7'>
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className='flex gap-2 items-center'>
              {ctabtn1.btnText}
              <AiOutlineArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* RIGHT PART */}
      <div className='custom-border-gradient custom-bg-gradient relative flex flex-row py-4 lg:w-[500px]'>
        {/* BG gradient : HW */}

        {/* {backgroundGradient} */}
        {backgroundGradient}


        <div className='items-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColour} pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, '']}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: 'pre-line',
              display: 'block'
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  )
}

export default CodeBlocks

