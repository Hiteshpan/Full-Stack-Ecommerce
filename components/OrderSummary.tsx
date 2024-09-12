import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import axios from "axios"
import { useAppSelector } from '@/lib/supabase/hooks/redux'
import { getCart } from '@/redux/cartSlice'
import { supabase } from '@/lib/supabase/products'

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    quantity: number
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!)

const OrderSummary = () => {
    const cart = useAppSelector(getCart);

    let totalPrice = 0;
    cart.forEach((item: Product) => {
        totalPrice += item.price * item.quantity;
    });

    // Round to 3 decimal points
    totalPrice = parseFloat(totalPrice.toFixed(3));

    const createStripeSession = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        const stripe = await stripePromise;

        const checkoutSession = await axios.post("/api/checkout-sessions", {
            items: cart,
            email: user?.email
        });

        // console.log(checkoutSession);

        //redirect to checkout session:---

        const result = await stripe?.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        })

        if (result?.error) {
            console.log(result.error.message);
        }
    }

    return (
        <div className='border border-gray-300 p-3 mt-5 h-fit rounded-lg w-full md:w-[60%] lg:w-full mx-auto'>
            <div>
                <div className='flex items-center justify-center'>
                    <div className='w-[90%] md:w-[70%] text-center'>
                        <h1 className='font-bold text-lg md:text-xl pb-3 mb-5 border-b border-gray-300'>Order Summary</h1>
                    </div>
                </div>
                <div className='text-xs md:text-sm px-2'>
                    <div className='flex items-center justify-between'>
                        <p>Items:</p>
                        <p>${totalPrice}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Delivery:</p>
                        <p className='text-xs md:text-sm'>
                            <span className='text-[#188321] font-semibold'>FREE</span> $<span className='line-through text-gray-600'>30.00</span>
                        </p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Total:</p>
                        <p>${totalPrice}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Promotion Applied:</p>
                        <p className='text-xs md:text-sm'>
                            <span className='text-[#B12704] font-semibold text-xs'>NOT NOW</span> $<span className='line-through text-gray-600'>30.00</span>
                        </p>
                    </div>
                    <div className='flex justify-between text-lg md:text-xl font-semibold text-[#B12704] py-2 border-t border-b border-gray-300 my-1'>
                        <h1>Order Total:</h1>
                        <h1>${totalPrice}</h1>
                    </div>
                </div>
                <button
                    onClick={createStripeSession}
                    className='bg-[#FFD814] hover:bg-[#F7CA00] text-sm md:text-sm font-medium w-full rounded-full my-3 py-2'
                >
                    Place Your Order Now
                </button>
            </div>
        </div>
    )
}

export default OrderSummary
