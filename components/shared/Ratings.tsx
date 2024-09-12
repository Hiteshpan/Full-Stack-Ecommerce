import Image from 'next/image';
import React from 'react';
import rating from "../../public/star-icon.png";

const Ratings = ({ ratings }: { ratings: any }) => {
    ratings = JSON.parse(ratings);
    return (
        <div className='flex items-center'>
            {
                Array(4).fill(1).map((dummyItem, idx) => (
                    <Image
                        key={idx}
                        src={rating}
                        alt={'rating'}
                        width={16}
                        height={16}
                        className='sm:w-[20px] sm:h-[20px]'
                    />
                ))
            }
            <h1 className='text-xs sm:text-sm text-[#007185] ml-1 sm:ml-2 font-medium'>
                {ratings.count} ratings
            </h1>
        </div>

    )
}

export default Ratings
