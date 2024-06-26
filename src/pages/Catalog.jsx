import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiConnector';
import { categories } from '../services/apis';
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import Course_Card from '../components/core/Catalog/Course_Card';
import CourseSlider from '../components/core/Catalog/CourseSlider';
import Error from "./Error"
import { useSelector } from 'react-redux';
import Spinner from '../components/common/Spinner';

function Catalog () {
    const { loading } = useSelector(state => state.profile)
    const { catalogName } = useParams()
    const [active, setActive] = useState(1)
    const [catalogPageData, setCatalogPageData] = useState(null)
    const [categoryId, setCategoryId] = useState('')
  
    // Fetch All Categories
    useEffect(() => {
      ;(async () => {
        try {
          const res = await apiConnector('GET', categories.CATEGORIES_API)
          const category_id = res?.data?.data?.filter(
            ct => ct.name.split(' ').join('-').toLowerCase() === catalogName
          )[0]._id
          setCategoryId(category_id)
        } catch (error) {
          console.log('Could not fetch Categories.', error)
        }
      })()
    }, [catalogName])
    useEffect(() => {
      if (categoryId) {
        ;(async () => {
          try {
            const res = await getCatalogaPageData(categoryId)
            setCatalogPageData(res)
          } catch (error) {
            console.log(error)
          }
        })()
      }
    }, [categoryId])
  
    if (loading || !catalogPageData) {
      return (
        <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
          <div className='flex justify-center items-center mt-[200px]'>
            <Spinner/>
          </div>
        </div>
      )
    }
    if (!loading && !catalogPageData.success) {
      return <Error />
    }
  
    return (
      <>
        {/* Hero Section */}
        <div className=' box-content bg-richblack-800 px-4'>
          <div className='flex lg:flex-row flex-col justify-between w-11/12 max-w-maxContent mx-auto'>
            <div className='w-11/12 max-w-maxContent mx-auto py-20 flex flex-col gap-3'>
              <p className='font-normal text-base text-richblack-300'>
                {`Home / Catalog / `}
                <span className='text-yellow-25'>
                  {catalogPageData?.data?.selectedCategory?.name}
                </span>
              </p>
              <p className='font-medium text-3xl text-richblack-5'>
                {catalogPageData?.data?.selectedCategory?.name}
              </p>
              <p className='font-normal text-base text-richblack-200'>
                {catalogPageData?.data?.selectedCategory?.description}
              </p>
            </div>
            <div className='lg:py-10 py-4 mx-auto lg:w-[20%] max-w-maxContent'>
              {/* <h2 className='text-white text-lg font-bold mx-auto mb-2'>Related Resources</h2> */}
              {/* Pending here : make all the links here */}
              {/* <li className='text-richblack-50'>Doc <span>{catalogPageData?.data?.selectedCategory?.name}</span></li>
              <li className='text-richblack-50'>Cheatsheets</li>
              <li className='text-richblack-50'>Articles</li>
              <li className='text-richblack-50'>Community Forums</li>
              <li className='text-richblack-50'>Projects</li> */}
            </div>
          </div>
        </div>
  
        {/* Section 1 */}
        <div className='w-11/12 max-w-maxContent mx-auto py-14'>
          <h1 className='font-semibold text-4xl text-richblack-5 '>
            Courses to get you started
          </h1>
          <div className=' flex border-b border-richblack-600 items-center pt-4 '>
            <p
              className={`px-4 py-2 ${
                active === 1
                  ? 'font-medium border-b border-b-yellow-100 text-yellow-100'
                  : 'font-medium text-richblack-200'
              } cursor-pointer`}
              onClick={() => setActive(1)}
            >
              Most Populer
            </p>
            <p
              className={`px-4 py-2 ${
                active === 2
                  ? 'border-b border-b-yellow-25 text-yellow-25'
                  : 'text-richblack-50'
              } cursor-pointer`}
              onClick={() => setActive(2)}
            >
              New
            </p>
          </div>
          <div className='py-10'>
            <CourseSlider
              Courses={catalogPageData?.data?.selectedCategory?.courses}
            />
          </div>
        </div>
        {/* Section 2 */}
        <div className=' mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent'>
          <div className='font-semibold text-4xl text-richblack-5'>
            Top courses in {catalogPageData?.data?.differentCategory?.name}
          </div>
          <div className='py-10'>
            <CourseSlider
              Courses={catalogPageData?.data?.differentCategory?.courses}
            />
          </div>
        </div>
  
        {/* Section 3 */}
        <div className=' mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent'>
          <div className='font-semibold text-4xl text-richblack-5'>
            Frequently Bought Together
          </div>
          <div className='py-8'>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              {catalogPageData?.data?.mostSellingCourses
                ?.slice(0, 4)
                .map((course, i) => (
                  <Course_Card course={course} key={i} Height={'h-[300px]'} />
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
  
export default Catalog