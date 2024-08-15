import React from 'react'
import Subtotal from './shared/Subtotal'
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const ProceedToBuy = ({ length, totalPrice }: { length: number, totalPrice: number }) => {
    const router = useRouter();
    return (
        <div className='w-[27%] h-fit border border-gray-300'>
            <div className='p-4'>
                <div className='flex'>
                    <span className='text-[#067D62] text-lg h-fit'><FaCheckCircle /></span>
                    <p className='text-xs text-center'><span className='text-[#067D62] font-bold'>Your order is eligible for FREE Delivery.</span> Choose <span className='text-[#147c8f] text-xs cursor-pointer hover:text-red-600 hover:underline'>FREE Delivery</span> option at checkout.</p>
                </div>
                <div className='px-auto my-4'>
                    <Subtotal left={true} length={length} totalPrice={totalPrice} />
                </div>
                <button 
                onClick={()=>{
                router.push('/checkout')
                }}
                 className='bg-[#FFD814] hover:bg-[#F7CA00] text-sm font-medium w-full rounded-full py-2'>Proceed To Buy</button>
            </div>
        </div>
    )
}

export default ProceedToBuy
