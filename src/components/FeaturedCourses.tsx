'use client'
import Link from "next/link"
import CourseData from "@/data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}
// hamara jo data key value arha hai un sab ki types define krd pehly
// then jab data fetch krrhy to whaan woh object btadiya

const FeaturedCourses = () => {
    const featuredCourses = CourseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide">Featured Courses</h2>
                    <p className="mt-2 text-2xl sm:text-4xl font-extrabold md:text-3xl tracking-tight text-white" >Learn With The Best</p>
                </div>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-center px-4" >
                    {
                        featuredCourses.map((course: Course) => (
                            <div key={course.id} className="mx-auto px-3 flex ">
                                <BackgroundGradient className="min-h-48 flex flex-col rounded-[22px] overflow-hidden bg-white h-full max-w-sm dark:bg-zinc-900" >
                                    <div className="p-4 sm:p-6 bg-slate-50 dark:bg-zinc-900 flex flex-col items-center text-center flex-grow" >
                                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                        <p>{course.description}</p>

                                        <Link href={`/courses/${course.slug}`} className="mt-8 border px-4 py-2 rounded-lg dark:bg-white dark:text-zinc-900 hover:bg-zinc-950 hover:text-white border-black transition duration-500" >
                                        
                                            Learn More</Link>

                                    </div>

                                </BackgroundGradient>
                            </div>

                        ))
                    }
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href="/courses" className='border px-6 py-3 rounded-sm bg-white hover:bg-transparent hover:text-white hover:border-white border-teal-900 border-2 text-teal-900 font-semibold transition-all duration-500' > View All Courses </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses