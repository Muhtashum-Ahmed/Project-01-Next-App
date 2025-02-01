import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import courseData from '@/data/music_courses.json'

// jo data hai uski types define krni bcz using typeScript
interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}
export default async function page({
    params,
}: {
    params: Promise<{ slug: string }>
}
) {
    const slug = (await params)?.slug;
    // console.log(slug);

    const detailedOfCourse = courseData.courses.filter((course: Course) => course.slug.toLowerCase() == slug.toLowerCase())
    // console.log(detailedOfCourse);

    return (
        <div className="">
            <BackgroundBeamsWithCollision  >
                {
                    detailedOfCourse.map((data) => (
                        <div className='z-50 m-4 sm:mt-32 bg-transparent shadow-xl  max-w-[800px]' key={data.id}>
                            <div className='mt-64 sm:mt-32 border p-8 lg:flex  lg:gap-x-10'>
                                <figure className='flex '>
                                    <img className='h-40 sm:h-56 md:h-80 lg:h-auto mx-auto' src={data.image} alt={data.title} />
                                </figure>
                                <div className='w-full'>
                                    <h1 className='font-extrabold text-2xl sm:text-3xl py-4' >{data.title}</h1>
                                    <p className='text-sm sm:text-lg' >{data.detailDescription}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </BackgroundBeamsWithCollision>
        </div>
    )
}

