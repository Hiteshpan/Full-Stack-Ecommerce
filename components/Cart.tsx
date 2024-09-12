"use client"
import React from 'react'
import ShoppingCart from './ShoppingCart'
import ProceedToBuy from './ProceedToBuy'
import { getCart } from '@/redux/cartSlice';
import { useAppSelector } from '@/lib/supabase/hooks/redux';

const Cart = () => {
    const cart = useAppSelector(getCart);

    let totalPrice = 0;
    cart.forEach((item: any) => {
        totalPrice += item.price * item.quantity;
    });

    // Round to 3 decimal points
    totalPrice = parseFloat(totalPrice.toFixed(3));
    return (
        <div className='w-full md:w-[85%] mx-auto mt-10'>
            <div className='flex flex-col md:flex-col lg:flex-row w-full justify-between gap-6'>
                <ShoppingCart cart={cart} totalPrice={totalPrice} />
                <div className='flex md:justify-center'>
                    <ProceedToBuy length={cart.length} totalPrice={totalPrice} />
                </div>
            </div>
        </div>
    )
}

export default Cart
