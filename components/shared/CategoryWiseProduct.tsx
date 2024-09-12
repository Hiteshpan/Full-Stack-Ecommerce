import React from 'react'
import Image from "next/image";
import Ratings from './Ratings';
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { useRouter } from 'next/navigation';
import { addToCart } from '@/redux/cartSlice';
import Link from 'next/link';

const CategoryWiseProduct = ({ product }: { product: any }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    return (
        <div className='border border-gray-300 p-2 bg-white h-full'>
            <h1 className='font-bold capitalize text-center text-base sm:text-lg'>
                {product.category}
            </h1>
            <Link href={`/product/${product.id}`}>
                <div className='my-2 flex items-center justify-center bg-gray-100 h-[200px] sm:h-[250px] overflow-hidden object-cover rounded-md'>
                    <Image
                        className='p-4 sm:p-8 mix-blend-multiply'
                        src={product.image}
                        width={200}
                        height={200}
                        alt={product.title}
                    />
                </div>
            </Link>
            <div className='text-center'>
                <h1 className='font-medium text-base sm:text-lg'>
                    {product.title}
                </h1>
                <div className='flex items-center justify-center'>
                    <Ratings ratings={product.rating} />
                </div>
                <p className='font-bold text-xl sm:text-2xl my-2'>
                    {`$ ${product.price}`}
                </p>
            </div>
            <div className='my-2'>
                <button
                    onClick={() => {
                        dispatch(addToCart(product));
                        router.push('/cart');
                    }}
                    className='bg-[#FFD814] py-[6px] sm:py-[8px] w-full rounded-full my-2 hover:bg-[#F7CA00] text-sm sm:text-base'>
                    Add to Cart
                </button>
            </div>
        </div>

    )
}

export default CategoryWiseProduct;
