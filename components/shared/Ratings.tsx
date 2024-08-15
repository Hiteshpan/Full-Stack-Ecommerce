import Image from 'next/image';
import React from 'react';
import rating from "../../public/star-icon.png";

const Ratings = ({ ratings }: { ratings: any }) => {
    ratings = JSON.parse(ratings);
    return (
        <div className='flex items-center'>
            {
                Array(4).fill(1).map((dummyItem) => <Image src={rating} alt={'rating'} width={20} height={20} />)
            }
            <h1 className='text-[#007185] text-sm ml-2 font-medium'>{ratings.count} ratings</h1>
        </div >
    )
}

export default Ratings
