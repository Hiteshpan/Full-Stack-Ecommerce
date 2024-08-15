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
        <div className='w-[70%]'>
            <div className=' flex justify-between items-center py-4 px-2 border-b border-gray-300'>
                <h1 className='font-bold text-3xl'>Shopping Cart</h1>
                <p className='font-medium text-sm text-gray-500'>Price</p>
            </div>
            {
                cart.map((product: any) => {
                    return (
                        <div key={product.id} className='flex justify-between py-5 px-2 border-b border-gray-300'>
                            <div className='flex'>
                                <Link href={`/product/${product.id}`}>
                                    <div className='bg-gray-100 p-3 rounded-md'>
                                        <Image className='mix-blend-multiply' src={product.image} alt={product.title} width={100} height={100} />
                                    </div>
                                </Link>
                                <div className='ml-5'>
                                    <h1 className='font-medium'>{product.title}</h1>
                                    <p className='text-[11px] text-[#188321] my-1 font-bold w-fit'>IN STOCK</p>
                                    <h1 onClick={() => {
                                        dispatch(removeFromTheCart(product.id));
                                    }} className='text-red-600 font-bold cursor-pointer w-fit'>REMOVE</h1>
                                    <div className='bg-gray-200 my-4 flex justify-between items-center rounded-md px-5 w-fit py-1 text-xl font-medium'>
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
                            <div>
                                <h1 className='text-xl font-bold text-right'>{`$ ${product.price}`}</h1>
                                <p className='text-xs py-1'>M.R.P.:<span className='line-through text-gray-600'>₹3,950.00</span></p>
                            </div>
                        </div>
                    )
                })
            }
            <div className='flex items-center justify-between mt-3 pl-2'>
                <h1 onClick={() => {
                    dispatch(clearAllCart());
                }} className=' hover:underline-offset-4 font-bold text-xl text-red-600 cursor-pointer'>CLEAR ALL</h1>
                <Subtotal left={false} length={cart.length} totalPrice={totalPrice} />
            </div>
            <div className='h-32'></div>
        </div>
    )
}

export default ShoppingCart
