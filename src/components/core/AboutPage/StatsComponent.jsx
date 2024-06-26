import React, { useState } from 'react'

const Stats = [
  {count: "5K", label:"Active Students"},
  {count: "10+", label:"Mentors"},
  {count: "200+", label:"Courses"},
  {count: "50+", label:"Awards"},
];


const StatsComponent = () => {

    const [counter, setCounter] = useState(false);

  return (
    <section className='bg-richblack-700 my-24 lg:my-12 w-full'>
        <div className='flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-4 text-center'>
                {
                    Stats.map((data, index) => {
                        return (
                            <div key={index} className='flex flex-col py-16'>
                                <h1 className='text-3xl text-white font-bold'>
                                    {data.count}
                                </h1>
                                <h2 className=' text-richblack-300'>
                                   {data.label} 
                                </h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent