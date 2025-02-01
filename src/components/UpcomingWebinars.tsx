"use client"
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'

function UpcomingWebinars() {
    return (
        <div className='h-max py-8 bg-gray-900' >
            <div className='max-w-7xl mx-auto sm:px-6' >
                <div className='text-center'>
                    <h2 className='uppercase text-teal-600 tracking-wide' >Featured Weebinars</h2>
                    <p className='px-2 font-extrabold mt-2 text-3xl leading-8 text-white tracking-tight' >Enhance Your Musical Journey</p>
                </div>
                <div className='px-2' >
                    <div className=" mx-auto px-0">
                        <HoverEffect items={projects} />
                    </div>
                </div>
                <div className='mt-0 text-center'>
                    <Link href={""} className='border px-6 py-3 rounded-sm hover:bg-white hover:border-teal-900 border-2 text-white hover:text-teal-900 font-semibold transition-all duration-500' >
                        View All Webinars
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UpcomingWebinars


export const projects = [
    {
        title: "Stripe",
        description:
            "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        title: "Netflix",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        title: "Google",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        link: "https://microsoft.com",
    },
];