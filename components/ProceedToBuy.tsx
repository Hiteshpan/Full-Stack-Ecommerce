import React from 'react'
import Subtotal from './shared/Subtotal'
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const ProceedToBuy = ({ length, totalPrice }: { length: number, totalPrice: number }) => {
    const router = useRouter();
    return (
        <div className='w-[90%] mx-auto sm:w-[60%] md:w-[70%] lg:w-[80%] xl:w-[80%] h-fit border border-gray-300 mb-5 md:mb-10'>
            <div className='p-2 sm:p-4'>
                <div className='flex flex-col sm:flex-row items-center sm:items-start'>
                    <span className='text-[#067D62] text-lg'><FaCheckCircle /></span>
                    <p className='text-xs sm:text-sm text-center sm:text-left sm:ml-2 mt-2 sm:mt-0'>
                        <span className='text-[#067D62] font-bold'>Your order is eligible for FREE Delivery.</span>
                        Choose <span className='text-[#147c8f] cursor-pointer hover:text-red-600 hover:underline'>FREE Delivery</span> option at checkout.
                    </p>
                </div>
                <div className='my-4'>
                    <Subtotal left={true} length={length} totalPrice={totalPrice} />
                </div>
                <button
                    onClick={() => {
                        router.push('/checkout')
                    }}
                    className='bg-[#FFD814] hover:bg-[#F7CA00] text-sm sm:text-base font-medium w-full rounded-full py-2'>
                    Proceed To Buy
                </button>
            </div>
        </div>

    )
}

export default ProceedToBuy
