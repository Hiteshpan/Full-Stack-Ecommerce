import Image from 'next/image'
import React from 'react'
import prime from '@/public/prime-logo.png'
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { addToCart } from '@/redux/cartSlice'
import { useRouter } from 'next/navigation'

const AddToCardContainer = ({ product }: { product: any }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    return (
        <div className='border border-gray-300 rounded-md h-fit text-sm'>
            <div className='p-3'>
                <Image src={prime} alt='PrimeLogo' width={40} height={40} />
            </div>
            <div className='p-4'>
                <h1><span className='text-[#147c8f] cursor-pointer hover:text-red-600 hover:underline'>FREE delivery</span> <span className='font-bold'>Thursday, 15 August.</span> <span className='text-[#147c8f] cursor-pointer hover:text-red-600 hover:underline'>Details</span></h1>
                <h1 className='my-3'>Or fastest delivery <span className='font-bold'>Tomorrow, 14 August.</span> Order within <span className='text-[#218321]'>17 hrs 56 mins</span>.<span className='text-[#147c8f] cursor-pointer hover:text-red-600 hover:underline'>Details</span></h1>
                <p className='text-[#147c8f] text-xs cursor-pointer hover:text-red-600'>Delivering to Panipat 132103 - Update location</p>

                <button onClick={() => {
                    dispatch(addToCart(product));
                    router.push("/cart");
                }} className='bg-[#FFD814] py-[6px] w-full rounded-full my-2 hover:bg-[#F7CA00]'>Add to Cart</button>
                <button className='bg-[#FFA41C] py-[6px] w-full rounded-full hover:bg-[#FA8900]'>Buy Now</button>
            </div>
        </div>
    )
}

export default AddToCardContainer
