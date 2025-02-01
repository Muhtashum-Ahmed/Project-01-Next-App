import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'


const HeroSection = () => {
  return (
    <div className='h-[100dvh] lg:full w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ' >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center' >
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font—bold bg—clip—text text—transparent bg-gradient-to-b from-neutral—50 U to—neutral-400 text-white" >Master The Art Of Music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto' >Dive into our comprehensive music courses and
          transform your musical journey today. Whether
          you' re al beginner or looking to refine your
          skills, join us to unlock your true potential.</p>
        <div className='mt-12'>
          <Link href={"/courses"} className='border rounded-full p-4 text-white border-white hover:bg-white hover:text-black hover:border-black transition-all duration-500' >
            Explore Courses
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection


