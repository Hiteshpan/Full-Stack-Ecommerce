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
            <div className='w-[98%] rounded-md mx-auto mt-2 mb-5 p-2 flex items-center justify-center border-b-2 shadow-custom-inset'>
                <div className='w-[80%] flex items-center justify-between'>
                    <div className='border border-transparent hover:border-black rounded-md p-[11px]'>
                        <Link href={'/'}>
                            <Image src={amazonLogo} width={110} height={130} alt='amazon-logo' />
                        </Link>
                    </div>
                    <div>
                        <h1 className='font-medium text-4xl'>Checkout</h1>
                    </div>
                    <div className='text-[#999999]'>
                        <IoLockClosed size={30} />
                    </div>
                </div>
            </div>

            <div className='flex justify-center w-[90%] px-10 mx-auto'>
                <div className='w-[80%]'>
                    <div className='w-[80%] mx-auto border-b border-gray-300 py-2 px-4'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-lg'>1. Deliver Address :</h1>
                            <div className='w-[65%]'>
                                <p className='text-sm'>Hitesh Kumar <br />
                                    Kachha Chamariya Road <br />
                                    Rajiv Nagar, Near Patakha Factory <br />
                                    ROHTAK, HARYANA 124001<br />
                                    Add delivery instructions</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[80%] mx-auto py-2 px-4 pb-6 border-b-2 border-gray-300'>
                        <div className='flex justify-between w-[50%]'>
                            <h1 className='font-bold text-lg'>2. Items & Delivery :</h1>
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
                </div>

                <div className='w-[25%]'>
                    <OrderSummary />
                </div>
            </div>



        </div>
    )
}

export default withAuth(Checkout);
