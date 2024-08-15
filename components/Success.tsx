"use client"
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Success = () => {
    const cart = useAppSelector(getCart);
    return (
        <div className='mt-9'>
            <div className='mx-auto w-[70%]'>
                <h1 className='font-semibold text-4xl mb-5 p-4 text-center border-b-2 shadow-custom-inset'>Thankyou for Ordering with Amazon<span className='text-[#ff9900]'>.in</span></h1>
                <div>
                    <div>
                        <h1 className='font-bold py-1 my-3 text-2xl text-[#ff9900] border-b border-gray-300'>Order Details</h1>
                    </div>
                    {
                        cart.map((product: any) => {
                            return (
                                <div key={product.id} className='px-6 py-4 border-b-2 border-gray-300'>
                                    <div className='flex'>
                                        <div className='bg-gray-100 p-3 rounded-md'>
                                            <Image className='mix-blend-multiply' src={product.image} alt={product.title} width={100} height={100} />

                                        </div>
                                        <div className='ml-5'>
                                            <h1 className='font-bold text-lg'>{product.title}</h1>
                                            <h2 className='text-sm my-2 font-medium text-gray-500'>Total quantity of Product: <span className='font-bold text-base text-gray-800'>{product.quantity}</span></h2>
                                            <p className='text-2xl font-bold py-2 '>{`$${product.price * product.quantity}`}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='my-5 text-right'>
                    <Link href={"/"} className='bg-[#FFD814] py-[8px] px-[40px] w-full rounded-full my-2 hover:bg-[#F7CA00]'>Buy more products</Link>

                </div>
            </div>
        </div>
    )
}

export default Success