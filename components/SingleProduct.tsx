import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'
import AddToCardContainer from './AddToCardContainer'

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className='flex justify-between'>
                {
                    singleProduct.map((product: any) => {
                        return (
                            <div className='flex'>
                                <div className='flex'>
                                    <div className='bg-gray-100 rounded-md flex items-center justify-center'>
                                        <Image className='mix-blend-multiply p-4' src={product.image} alt={product.title} width={250} height={400} />
                                    </div>
                                    <div className='m-5 w-[70%]'>
                                        <h1 className='font-bold text-2xl'>{product.title}</h1>
                                        <p className='text-md'>{product.description}</p>
                                        <Ratings ratings={product.rating} />
                                        <h1 className='text-2xl font-bold'>{`$ ${product.price}`}</h1>
                                        <div>
                                            <h1 className='font-bold text-base'>About this Item</h1>
                                            <li className='text-[15px]'>Monster Durability & Display : Corning Gorilla Glass Victus+, 16.83 Centimeters (6.6"Inch) Super AMOLED Display, FHD+ Resolution with 1080 x 2340 Pixels and 120Hz Refresh Rate</li>
                                            <li className='text-[15px]'>Monster Processor - Exynos 1380 Processor with Vapour Cooling Chamber | Latest Android 14 Operating System having One UI 6.1 platform | 2.4GHz, 2GHz Clock Speed with Octa-Core Processor</li>
                                            <li className='text-[15px]'>Monster Convenience & Security - Samsung Wallet with Tap & Pay | Knox Security | Get upto 4 Generations of AndroidOS Upgrades & 5 Years of Security Updates</li>
                                        </div>
                                    </div>
                                </div>
                                <AddToCardContainer product={product} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SingleProduct
