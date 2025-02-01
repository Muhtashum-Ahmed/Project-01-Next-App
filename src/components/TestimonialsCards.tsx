"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

function TestimonialsCards() {
  return (

    <div className="h-full w-full dark:bg-black dark:bg-grid-white/[0.3] relative flex flex-col ">
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white/80 dark:bg-black dark:bg-grid-white/[0.05] bg-dot-black/[1]  items-center justify-center relative overflow-hidden" >
      <h2 className="mt-20 text-3xl font-bold text-center mb-8 z-10" >Hear our Harmony: Voices of success</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      </div>
    </div>
  )
}

export default TestimonialsCards

const testimonials = [
  {
    quote: "🔥 Discovered underground Pakistani qawwali artists here that blew my mind! The cultural curation is next level.",
    name: "Zara Ahmed",
    title: "Sufi Music Enthusiast | Lahore"
  },
  {
    quote: "🎤 From uploading my first indie Urdu track to getting 50k streams – this platform made it possible! #ArtistGrowth",
    name: "Ali Haider",
    title: "Indie Artist | Karachi"
  },
  {
    quote: "🎧 Best audio quality for classical Indian ragas! Finally a platform that respects our musical heritage.",
    name: "Priya Sharma",
    title: "Sitar Player | Mumbai"
  },
  {
    quote: "📻 My late-night radio show tripled its audience through their live streaming integration. Youth loves it!",
    name: "DJ Buraaq",
    title: "Host @ Radio Waves | Islamabad"
  },
  {
    quote: "💃 Found my wedding sangeet playlist here! Easy to filter by region – Punjabi bhangra to Bengali folk songs.",
    name: "Ayesha Khan",
    title: "Bride-to-be | Dubai"
  },
  {
    quote: "🎸 Connected with 3 amazing session musicians for our Bollywood fusion project. Collaboration tools = 💯",
    name: "Rohan Kapoor",
    title: "Music Director | Mumbai"
  },
  {
    quote: "📈 Our indie band's Spotify integration helped cross 1M streams! Analytics taught us what fans really want.",
    name: "The Fanoos",
    title: "Alternative Sufi Band | Peshawar"
  },
];
