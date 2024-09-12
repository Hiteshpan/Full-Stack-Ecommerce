"use client"
import Image from 'next/image'
import React from 'react'
import amazonLogo from "@/public/amazon-logo.png"
import { IoLockClosed } from "react-icons/io5";
import Link from 'next/link';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import OrderSummary from './OrderSummary';
import withAuth from '@/authcontext/withAuth';

const Checkout = () => {
    const cart = useAppSelector(getCart);
    return (
        <div>
            <div className='w-[98%] md:w-[90%] lg:w-[90%] rounded-md mx-auto mt-2 mb-5 p-2 flex items-center justify-center border-b-2 shadow-custom-inset'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                    <div className='border border-transparent hover:border-black rounded-md p-[11px]'>
                        <Link href={'/'}>
                            <Image src={amazonLogo} width={110} height={130} alt='amazon-logo' />
                        </Link>
                    </div>
                    <div className='text-center md:text-left mt-2 md:mt-0'>
                        <h1 className='font-medium text-2xl md:text-4xl'>Checkout</h1>
                    </div>
                    <div className='text-[#999999] mt-2 md:mt-0'>
                        <IoLockClosed size={30} />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-col lg:flex-row justify-between w-[86%] px-0 md:px-4 mx-auto mt-3'>
                <div className='w-full md:w-full lg:w-[70%]'>
                    <div className='border-b border-gray-300 py-2 px-4'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <h1 className='font-bold text-lg'>1. Delivery Address :</h1>
                            <div className='w-full md:w-[65%]'>
                                <p className='text-sm ml-2'>
                                    Hitesh Kumar <br />
                                    Kachha Chamariya Road <br />
                                    Rajiv Nagar, Near Patakha Factory <br />
                                    ROHTAK, HARYANA 124001<br />
                                    Add delivery instructions
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='py-2 px-4 pb-6 border-b-2 border-gray-300'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <h1 className='font-bold text-lg'>2. Items & Delivery :</h1>
                        </div>

                        {cart.map((product: any) => (
                            <div key={product.id} className='p-2 md:px-6 md:py-4 border-b-2 border-gray-300'>
                                <div className='flex flex-col md:flex-row'>
                                    <div className='bg-gray-100 p-3 w-fit rounded-md'>
                                        <Image className='mix-blend-multiply' src={product.image} alt={product.title} width={100} height={100} />
                                    </div>
                                    <div className='ml-0 md:ml-4'>
                                        <h1 className='font-bold text-lg'>{product.title}</h1>
                                        <h2 className='text-sm my-2 font-medium text-gray-500'>
                                            Total quantity of Product: <span className='font-bold text-base text-gray-800'>{product.quantity}</span>
                                        </h2>
                                        <p className='text-lg md:text-2xl font-bold py-2'>{`$${product.price * product.quantity}`}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='w-full md:w-full lg:w-[27%] mt-4 md:mt-0'>
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default withAuth(Checkout);
