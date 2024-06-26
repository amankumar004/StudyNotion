import React from 'react'
import HighlightText from "../components/core/HomePage/HighlightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/StatsComponent'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFromSection from '../components/core/AboutPage/ContactFromSection'
import Footer from "../components/common/Footer"
import ReviewSlider from '../components/common/ReviewSlider'

const About = () => {
  return (
    <div className='flex flex-col text-white'>
        {/* section 1 */}
        <section className='lg:w-full h-[618px] bg-richblack-800'>
            <div className='flex flex-col justify-center items-center mt-[150px]'>
                <header className='lg:w-[913px] flex flex-col place-items-center'>
                    <div className='flex flex-col mx-auto justify-center items-center text-4xl font-inter font-semibold'>
                        Driving Innovation in online Education for a
                        <HighlightText text={"Brighter Future"}/>
                    </div>
                    <p className='mt-5 lg:w-[750px] text-richblack-300 text-center'
                    >Studynotion is at the forefront of driving innovation in online education. 
                    We're passionate about creating a brighter future by offering cutting-edge courses, 
                    leveraging emerging technologies, and nurturing a <br/> vibrant learning community.</p>
                </header>
                {/* <div className="sm:h-[70px] lg:h-[150px]"></div> */}
                <div className='flex gap-x-5 mx-auto mt-12'>
                    <img src={BannerImage1} alt='aboutImage1'/>
                    <img src={BannerImage2} alt='aboutImage2'/>
                    <img src={BannerImage3} alt='aboutImage3'/>
                </div>
            </div>
        </section>


        {/* section 2 */}
        <section className='mt-[160px] text-center lg:w-[1200px] mx-auto'>
            <div className='text-4xl'>
                <Quote/>
            </div>
        </section>

        <div className='mt-[100px] w-full h-[1px] bg-richblack-600'></div>

        {/* section 3 */}
        <section className='mt-[100px] w-full'>
            <div className='mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500'>
                {/* founding story section  */}
                <div className='flex flex-col items-center gap-10 lg:flex-row justify-between'>
                    <div className='w-[460px]'>
                    {/* founding story left box */}
                        <h1 className=' bg-custom-gradient-5 bg-clip-text text-transparent text-4xl font-bold'
                            >Our Founding Story</h1>

                        <p className=' text-richblack-300 mt-6'
                        >Our e-learning platform was born out of a shared vision and passion for transforming education. 
                        It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, 
                        flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

                        <p className=' text-richblack-300 mt-4'
                        >As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional 
                        education systems. We believed that education should not be confined to the walls of a classroom or restricted by 
                        geographical boundaries. <br/> We envisioned a platform that could bridge these gaps and empower individuals from all 
                        walks of life to unlock their full potential.</p>
                    </div>
                    {/* founding story right box */}
                    <div className=' relative ml-6'>
                        <div className='absolute bg-custom-gradient-6 inset-0 w-[500px] rounded-full -rotate-0 opacity-20 -ml-5 -mt-10 blur-xl '></div>
                        <img src={FoundingStory} alt='img' className='relative z-10'/>
                    </div>
                </div>

                {/* vission and mission section */}
                <div className='flex flex-col lg:flex-row mx-auto justify-center items-center mt-[150px] gap-x-24'>
                    {/* left box */}
                    <div className='w-[486px]'>
                        <h1 className='text-3xl bg-custom-gradient-ourVision bg-clip-text text-transparent font-bold'
                            >Our Vision</h1>
                        <p className=' mt-5 text-richblack-300'
                        >With this vision in mind, we set out on a journey to create an e-learning platform that 
                        would revolutionize the way people learn.<br/> Our team of dedicated experts worked tirelessly to 
                        develop a robust and intuitive platform that combines cutting-edge technology with engaging content, 
                        fostering a dynamic and interactive learning experience.</p>
                    </div>

                    {/* right box */}
                    <div className='w-[486px]'>
                        <h1 className=' text-3xl bg-custom-gradient-ourMission bg-clip-text text-transparent font-bold'
                        >Our Mission</h1>
                        <p className=' mt-5 text-richblack-300'
                        >Our mission goes beyond just delivering courses online. We wanted to create a vibrant community 
                        of learners, where individuals can connect, collaborate, and learn from one another. We believe that 
                        knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of 
                        collaboration through forums, live sessions, and networking opportunities.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* section 4 */}
        <div className='flex justify-center items-center'>
            <StatsComponent />
        </div>

        {/* section 5 */}
        <section className=' mx-auto lg:w-10/12 mt-16 mb-10'>
            <LearningGrid/>
            <ContactFromSection/>
        </section>

        <div className="relative text-white mx-auto my-20 flex w-11/12 flex-col">
          {/* Reviws from Other Learner */}
          <h1 className="text-center text-4xl font-semibold mt-8">
            Reviews from other learners
          </h1>
          <ReviewSlider/>
        </div>

        {/* footer section */}
        <Footer/>
    </div>
  )
}

export default About