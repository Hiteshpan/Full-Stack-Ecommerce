import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    return (
        <div className='bg-gray-200 font-sans text-black text-sm m-0 p-0'>
            <div className='swiper w-full h-full mx-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className='swiper-slide flex justify-center items-center text-lg bg-white'>
                        <div>
                            <Image
                                style={{
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)'
                                }}
                                src={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/BAU/Rakshabandan/Hero-With--RTB-PC-._CB566994066_.jpg"} width={10000} height={1000} alt='image' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide flex justify-center items-center text-lg bg-white'>
                        <div>
                            <Image
                                style={{
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)'
                                }}
                                src={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/GW/Aug/BAU/UNREC/ALL/3000_PC._CB566994897_.jpg"} width={10000} height={1000} alt='image' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide flex justify-center items-center text-lg bg-white'>
                        <div>
                            <Image
                                style={{
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)'
                                }}
                                src={"https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/August/Unrec/Helmets1_GW-Hero-PC._CB567194302_.jpg"} width={10000} height={1000} alt='image' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide flex justify-center items-center text-lg bg-white'>
                        <div>
                            <Image
                                style={{
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)'
                                }}
                                src={"https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/urec/hero/Under1499_Tallhero_3000x1200._CB568928188_.jpg"} width={10000} height={1000} alt='image' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide flex justify-center items-center text-lg bg-white'>
                        <div>
                            <Image
                                style={{
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)'
                                }}
                                src={"https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/Travel/PC_Hero_BAU/IF_PC_Hero_3000x1200._CB583399235_.jpg"} width={10000} height={1000} alt='image' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide flex justify-center items-center text-lg bg-white'>
                        <div>
                            <Image
                                style={{
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)'
                                }}
                                src={"https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad_2024/Independence/hero/stripe/Desktop-hero-KV-3000x-1200-2x._CB566781497_.jpg"} width={10000} height={1000} alt='image' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide flex justify-center items-center text-lg bg-white'>
                        <div>
                            <Image
                                style={{
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)'
                                }}
                                src={"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/IndependenceDay/3000x1200_Hero-Tall_NP._CB567155787_.jpg"} width={10000} height={1000} alt='image' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='swiper-slide flex justify-center items-center text-lg bg-white'>
                        <div>
                            <Image
                                style={{
                                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%)'
                                }}
                                src={"https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad_2024/Independence/hero/stripe/new/2/Saheli-hero-KV-3000x-1200-2x._CB567187851_.jpg"} width={10000} height={1000} alt='image' />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
}
