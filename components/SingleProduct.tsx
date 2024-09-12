import Image from 'next/image'
import React from 'react'
import Ratings from './shared/Ratings'
import AddToCardContainer from './AddToCardContainer'

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
    return (
        <div className='w-[90%] md:w-[80%] lg:w-[80%] mx-auto mt-10 mb-4'>
            <div className='flex flex-col md:flex-col justify-between'>
                {singleProduct.map((product: any) => (
                    <div key={product.id} className='flex flex-col md:flex-col lg:flex-row gap-4 w-full lg:w-full'>
                        {/* Image Section */}
                        <div className='flex flex-col md:flex-col lg:flex-col items-center justify-center w-full lg:w-1/3'>
                            <div className='bg-gray-100 rounded-md flex items-center justify-center mb-4 md:mb-0'>
                                <Image
                                    className='mix-blend-multiply p-4'
                                    src={product.image}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className='md:m-5 lg:m-5 w-full md:w-auto lg:w-[70%]'>
                            <h1 className='font-bold text-lg md:text-2xl lg:text-3xl'>{product.title}</h1>
                            <p className='text-sm md:text-md lg:text-lg mt-2'>{product.description}</p>
                            <Ratings ratings={product.rating} />
                            <h1 className='text-lg md:text-2xl lg:text-3xl font-bold mt-3'>{`$ ${product.price}`}</h1>

                            {/* About the Item */}
                            <div className='mt-4'>
                                <h1 className='font-bold text-base lg:text-md'>About this Item</h1>
                                <ul className='list-disc ml-5'>
                                    <li className='text-[13px] md:text-[15px] lg:text-[17px]'>
                                        Monster Durability & Display Corning Gorilla Glass Victus, 16.83 Centimeters 6.6 Inch Super AMOLED Display FHD Resolution with 1080 2340 Pixels and 120Hz Refresh Rate
                                    </li>
                                    <li className='text-[13px] md:text-[15px] lg:text-[17px]'>
                                        Monster Processor - Exynos 1380 Processor with Vapour Cooling Chamber | Latest Android 14 Operating System having One UI 6.1 platform | 2.4GHz, 2GHz Clock Speed with Octa-Core Processor
                                    </li>
                                    <li className='text-[13px] md:text-[15px] lg:text-[17px]'>
                                        Monster Convenience & Security - Samsung Wallet with Tap & Pay | Knox Security | Get up to 4 Generations of Android OS Upgrades & 5 Years of Security Updates
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Add to Cart Section */}
                        <div className='w-full md:w-80 lg:w-[50%]'>
                            <AddToCardContainer product={product} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SingleProduct
