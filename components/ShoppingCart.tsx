"use client"
import { useAppDispatch } from '@/lib/supabase/hooks/redux'
import { clearAllCart, decrementQuantity, incrementQuantity, removeFromTheCart } from '@/redux/cartSlice';
import Image from 'next/image';
import React from 'react'
import Subtotal from './shared/Subtotal';
import Link from 'next/link';

const ShoppingCart = ({ cart, totalPrice }: { cart: any, totalPrice: number }) => {
    const dispatch = useAppDispatch();

    return (
        <div className='w-[95%] md:w-[90%] mx-auto'>
            <div className='flex justify-between items-center py-4 px-2 border-b border-gray-300'>
                <h1 className='font-bold text-xl sm:text-2xl md:text-3xl'>Shopping Cart</h1>
                <p className='font-medium text-xs sm:text-sm md:text-base text-gray-500'>Price</p>
            </div>
            {cart.map((product: any) => {
                return (
                    <div key={product.id} className='flex flex-col md:flex-col lg:flex-row justify-between py-5 px-2 border-b border-gray-300'>
                        <div className='flex'>
                            <Link href={`/product/${product.id}`}>
                                <div className='bg-gray-100 p-3 rounded-md'>
                                    <Image className='mix-blend-multiply' src={product.image} alt={product.title} width={80} height={80} />
                                </div>
                            </Link>
                            <div className='ml-3 sm:ml-5'>
                                <h1 className='font-medium text-sm sm:text-base md:text-lg'>{product.title}</h1>
                                <p className='text-[10px] sm:text-[11px] md:text-xs text-[#188321] my-1 font-bold w-fit'>IN STOCK</p>
                                <h1 onClick={() => {
                                    dispatch(removeFromTheCart(product.id));
                                }} className='text-red-600 font-bold cursor-pointer w-fit text-sm md:text-base'>REMOVE</h1>
                                <div className='bg-gray-200 my-4 flex justify-between items-center rounded-md px-3 sm:px-5 w-fit py-1 text-lg sm:text-xl'>
                                    <div onClick={() => {
                                        product.quantity > 1 && dispatch(decrementQuantity(product));
                                    }} className='cursor-pointer mr-4'>-</div>
                                    <div className='border border-none px-1'>{product.quantity}</div>
                                    <div onClick={() => {
                                        dispatch(incrementQuantity(product));
                                    }} className='cursor-pointer ml-4'>+</div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 md:mt-0 flex items-end flex-col justify-end'>
                            <p className='text-xs md:text-sm py-1 w-fit'>M.R.P.:<span className='line-through text-gray-600'>₹3,950.00</span></p>
                            <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-right w-fit'>{`$ ${product.price}`}</h1>
                        </div>
                    </div>
                );
            })}
            <div className='flex flex-col sm:flex-row items-center justify-between mt-3 pl-2'>
                <h1 onClick={() => {
                    dispatch(clearAllCart());
                }} className='hover:underline-offset-4 font-bold text-lg sm:text-xl text-red-600 cursor-pointer mb-4 sm:mb-0'>CLEAR ALL</h1>
                <Subtotal left={false} length={cart.length} totalPrice={totalPrice} />
            </div>
            <div className='h-10 md:h-32'></div>
        </div>

    )
}

export default ShoppingCart
