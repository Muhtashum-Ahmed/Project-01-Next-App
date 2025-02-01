"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

import CourseData from '@/data/music_courses.json';

function page() {
    return (
        <div className="h-[100dvh] w-full pt-36 p-4">
            <h2 className="text-center text-5xl sm:text-6xl  font-extrabold" >All Courses ({CourseData.courses.length})</h2>
            {/* <div className="w-2/3 mx-auto border grid justify-center items-center align-middle grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"> */}
            <div className="w-2/3 mx-auto flex flex-wrap justify-center gap-x-12 ">
                {
                    CourseData.courses.map((course, key) => (

                        <CardContainer className="inter-var" key={key}>
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {course.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {course.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image
                                        src={course.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                
                            </CardBody>
                        </CardContainer>
                    ))
                }
            </div>
        </div>
    )
}

export default page




