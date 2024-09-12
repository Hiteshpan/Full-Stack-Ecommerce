import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'
import { useRouter } from 'next/navigation'

const ProductCard = ({ product }: { product: any }) => {
    const router = useRouter();
    return (
        <div className='w-full sm:w-[48%] md:w-full lg:w-full mx-auto'>
            <div className='cursor-pointer' onClick={() => {
                router.push(`/product/${product.id}`);
            }}>
                <div className='flex items-center justify-center bg-gray-100 h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden object-cover rounded-md'>
                    <Image className='mix-blend-multiply p-6 sm:p-8' src={product.image} alt={product.title} width={180} height={180} />
                </div>
                <h1 className='font-bold text-md sm:text-lg md:text-xl mt-2'>{product.title}</h1>
                <p className='text-[11px] sm:text-[13px] md:text-[14px] text-[#666159] mt-1'>{`${product.description.substring(0, 50)}...`}</p>
                <Ratings ratings={product.rating} />
                <p className='font-bold text-lg sm:text-xl md:text-2xl mt-2'>{`$ ${product.price}`}</p>
            </div>
        </div>
    )
}

export default ProductCard
