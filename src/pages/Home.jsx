import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import "../App.css";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLangugageSection from "../components/core/HomePage/LearningLangugageSection";
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from '../components/common/Footer';
import ReviewSlider from '../components/common/ReviewSlider';

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>

        <Link to={"/signup"}>
          <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            trasition-all duration-200 hover:scale-95 w-fit inset-shadow'> 
            <div className='flex items-center gap-2 rounded-full px-10 py-[5px]
              transition-all duration-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-7'>
          Empower Your Future with {" "}
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className='w-full md:w-3/4 mt-4 text-center text-md font-bold text-richblack-300 font-inter'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-col md:flex-row gap-7 mt-8'>
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/signup"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className='relative mx-3 my-12 mt-[72px] w-full lg:w-[1035px] shadow-custom-shadow'>
          <div className='absolute w-full lg:w-[1035px] inset-0 bg-custom-gradient-2 rounded-full -rotate-0 opacity-20 -ml-2 -mt-12 blur-xl'></div>
          <video 
            muted 
            loop 
            autoPlay 
            className=' relative z-10 w-full lg:w-auto'>
            <source src={Banner} type='video/mp4' />
          </video>
        </div>

        {/* Code section 1 */}
        <div className='flex flex-col sm:flex-col lg:flex-row'>
          <CodeBlocks 
            position={"lg:flex-row"}
            heading={
              <div className='w-full md:w-[486px] h-[88px] text-[36px]'>
                Unlock Your {" "}
                <HighlightText text={"coding potential"} /> {" "}
                with our online courses 
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="_.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
            codeColor={" text-richblack-50"}
            backgroundGradient={<div className='codeblock1 absolute' ></div>}
          />
        </div>

        {/* Code section 2 */}
        <div className='flex flex-col lg:flex-row-reverse'>
          <CodeBlocks 
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-4xl font-semibold'>
                Start {" "}
                <HighlightText text={`coding`}/>
                <br/>
                <HighlightText text={` in seconds`}/>
              </div>
            }
            subheading = {
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n</span><html>\nhead><title>Example</title><linkrel="stylesheet"href="_.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-orange-10"}
            backgroundGradient={<div className=' codeblock2 absolute'></div>}
          />
        </div>

        <div>
          <ExploreMore />
        </div>

      </div>

      {/* Section 2 */}
      <div className=' bg-pure-greys-5 text-richblack-700'>
        <div className='homepage_bg h-[333px] lg:mt-10'>

          <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto'>
            <div className='h-[150px]'></div>
            <div className='flex flex-col md:flex-row gap-7 text-white'>
              <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-3'>
                  Explore Full Catalog
                  <FaArrowRight/>
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div>
                  Learn more
                </div>
              </CTAButton>

            </div>
          </div>
        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8'>
          
          <div className='flex flex-col lg:flex-row gap-10 mt-[95px] w-full'>
            <div className='text-4xl font-semibold font-inter w-full lg:w-1/2'>
              Get the Skills you need for a 
              <HighlightText text={" Job that is in demand"} />
            </div>
            
            <div className='flex flex-col gap-10 w-full lg:w-1/2 items-start'>
              <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
              </div>

              <CTAButton active={true} linkto={"signup"}>
                <div>
                  Learn more
                </div>
              </CTAButton>

            </div>
          </div>

          <TimelineSection />

          <LearningLangugageSection />

        </div>

      </div>

      {/* Section 3 */}
      <div className="hidden md:block relative mx-auto my-20 w-11/12 text-white">

        <InstructorSection />

        <h2 className='text-center text-4xl font-semibold mt-10'>Reviews from Other Learners</h2>

        <ReviewSlider/>

      </div>

      {/* Footer */}
      <Footer/>

    </div>
  )
}

export default Home;
