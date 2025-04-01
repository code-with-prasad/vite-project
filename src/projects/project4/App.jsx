import React, { useState } from 'react'

const StarReating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    console.log(rating)

    return (
        <section>
            <div className='h-screen container flex justify-center items-center'>
                <div className='w-lg'>
                    {
                        Array.from({ length: 5 }).map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <i
                                    key={index}
                                    className={`text-3xl mx-1 cursor-pointer
                                        ${starValue <= (hover || rating) ? 'ri-star-fill text-yellow-500' : 'ri-star-line text-gray-400'}
                                        `}
                                    onClick={() => setRating(starValue)}
                                    onMouseEnter={()=>setHover(starValue)}
                                    onMouseLeave={()=>setHover(0)}
                                ></i>
                            );
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default StarReating