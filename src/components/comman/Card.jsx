import React from 'react'
import Image1 from '../assets/React-js-img.jpg';
import Image2 from '../assets/tailwind-img.png';
import Image3 from '../assets/html-img.jpg';

const Card = () => {
    const CARD = [
        {
            Cardimage: Image1,
            title: 'React JS',
            Para: 'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design and website.',
        },
        {
            Cardimage: Image2,
            title: 'Tailwind',
            Para: 'React lets you build user interfaces out of individual pieces called components. Create your own React components Thumbnail and Video.',
        },
        {
            Cardimage: Image3,
            title: 'Html &CSS',
            Para: 'In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example.',
        },
    ]
    return (
        <>{
            CARD.map((obj, i) => (
                <div className='w-full sm:w-1/2 lg:w-1/3 px-3 mt-4'>
                    <div className='border border-gray-200 rounded-2xl '>
                        <img src={obj.Cardimage} alt="salon-image" className='h-[240px] w-full rounded-2xl object-cover' />
                        <div className='py-3 px-6 bg-transparent text-gray-200'>
                            <h2 className='text-xl font-normal'>{obj.title}</h2>
                            <p className='text-base leading-6 pt-2 text[#4D4D4D]'>{obj.Para}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default Card
