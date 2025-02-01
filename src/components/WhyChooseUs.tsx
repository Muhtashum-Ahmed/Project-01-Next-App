"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicContent = [
    {
        title: "The Beatles - Hey Jude",
        description: "A timeless classic by The Beatles, 'Hey Jude' is known for its uplifting melody and heartfelt lyrics."
    },
    {
        title: "Pink Floyd - Comfortably Numb",
        description: "A masterpiece from Pink Floyd's 'The Wall' album, this song features iconic guitar solos and deep emotional themes."
    },
    {
        title: "Michael Jackson - Thriller",
        description: "The title track of the best-selling album of all time, 'Thriller' is famous for its spooky theme and groundbreaking music video."
    },
    {
        title: "Queen - Bohemian Rhapsody",
        description: "A rock opera by Queen, 'Bohemian Rhapsody' is celebrated for its unique structure and powerful vocal performances."
    },
    {
        title: "Adele - Rolling in the Deep",
        description: "A soulful and powerful track by Adele, 'Rolling in the Deep' is known for its emotional depth and strong vocals."
    }, {
        title: "Lo-Fi Beats",
        description: "A collection of soothing, low-fidelity beats that help you focus while studying, working, or simply relaxing with a cup of coffee on a rainy day."
    },
    {
        title: "Classical Symphony",
        description: "Experience the brilliance of Mozart, Beethoven, and Bach with these timeless symphonies, designed to inspire and elevate your soul through the power of orchestral music."
    },
    
];

function WhyChooseUs() {

    return (
        <div>
            <StickyScroll content={musicContent} />
        </div>
    )
}

export default WhyChooseUs