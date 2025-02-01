import React from 'react'

function Footer() {
    return (
        <footer className='bg-black/50 text-gray-400 py-12 relative' >
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6'>
                <div>
                    <h2 className='text-white font-bold text-2xl' >About Us</h2>
                    <p className='mt-6 text-justify' >Discover the rhythm of innovation! Music School is your gateway to seamless music streaming, curated playlists, and immersive audio experiences. Built with passion for music lovers worldwide.</p>
                </div>
                <div>
                    <h2 className='text-white font-bold text-2xl' >Quick Links</h2>
                    <div className='mt-6 flex flex-col gap-y-2 list-none'>
                        <li className='hover:text-white/80 hover:translate-x-3 transition-all w-fit cursor-pointer'>Home</li>
                        <li className='hover:text-white/80 hover:translate-x-3 transition-all w-fit cursor-pointer'>About</li>
                        <li className='hover:text-white/80 hover:translate-x-3 transition-all w-fit cursor-pointer'>Courses</li>
                        <li className='hover:text-white/80 hover:translate-x-3 transition-all w-fit cursor-pointer'>Contact Us</li>
                    </div>
                </div>
                <div>
                    <h2 className='text-white font-bold text-2xl ' >Follow Us</h2>
                    <div className='mt-6 flex flex-col gap-y-2 list-none'>
                        <li className='hover:text-white/80 hover:translate-x-3 transition-all w-fit cursor-pointer'>Facebook</li>
                        <li className='hover:text-white/80 hover:translate-x-3 transition-all w-fit cursor-pointer'>Instagram</li>
                        <li className='hover:text-white/80 hover:translate-x-3 transition-all w-fit cursor-pointer'>Twitter</li>
                        <li className='hover:text-white/80 hover:translate-x-3 transition-all w-fit cursor-pointer'>YouTube</li>
                    </div>

                </div>
                <div>
                    <h2 className='text-white font-bold text-2xl' >Contact Us</h2>
                    <div className='mt-6 flex flex-col gap-y-4'>
                        <p className='hover:text-white/80 transition-all w-fit'>Email: hello@yourmusicapp.com</p>
                        <p className='hover:text-white/80 transition-all w-fit'>Phone: +1 (555) 123-4567</p>
                    </div>

                </div>
            </div>

            {/* CopyWrite area */}
            <div className='bg-black/40 dark:text-white text-black h-10 grid items-center absolute inset-x-0 mt-8'>
                <p className='text-center pt-2 text-sm' >&#169; 2024 Music School All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer