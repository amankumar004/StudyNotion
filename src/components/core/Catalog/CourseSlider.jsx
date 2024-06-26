import React from 'react'
import {Swiper , SwiperSlide} from "swiper/react"
import Course_Card from './Course_Card'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {Autoplay , Pagination ,Navigation} from "swiper/modules"

const CourseSlider = ({Courses}) => {

    return (
        <div>
            {
                Courses?.length 
                ? (
                    <Swiper 
                        loop={true} 
                        slidesPerView={1} 
                        spaceBetween={25}
                        modules={[Pagination , Autoplay , Navigation]}
                        pagination = {true}
                        autoplay = {{
                            delay : 2500 , 
                            disableOnInteraction : false,
                        }}
                        navigation = {true}
                        breakpoints={{
                            1024 : {slidesPerView : 3} // It means when the window size 1024px , then 3 slides will show in preview  
                        }}
                        className='mySwiper'
                    >
                        {
                            Courses.map((course , index)=>(
                                <SwiperSlide key={index}>
                                    <Course_Card course={course} Height={"h-[250px]"} slider={true}/>
                                </SwiperSlide>
                            ))
                        } 
                    </Swiper>
                ) 
                : (<p></p>)
            }
        </div>
    )
}

export default CourseSlider