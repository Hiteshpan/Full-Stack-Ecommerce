"use client"
import React, { useEffect } from 'react';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import CategoryWiseProduct from './shared/CategoryWiseProduct';
import Carousel from '@/components/Carousel';

const HomePage = () => {
  const {
    mensProduct,
    getMensClothing,
    womensProduct,
    getWomensClothing,
    jewelryProduct,
    getJewelryProduct,
    electronicsProduct,
    getElectronicsProduct } = useSupabase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
    getJewelryProduct();
    getElectronicsProduct();
  }, [getMensClothing, getWomensClothing, getJewelryProduct, getElectronicsProduct])

  return (
    <div>
      <div className='relative h-full cursor-pointer'>
        <Carousel />
      </div>
      <div className='w-[95%] mx-auto grid grid-cols-4 gap-4 relative z-10 -top-72'>
        {
          mensProduct.map((product: any) => {
            return (
              <div key={product.id}>
                <CategoryWiseProduct product={product} />
              </div>
            )
          })
        }

        {
          womensProduct.map((product: any) => {
            return (
              <div key={product.id}>
                <CategoryWiseProduct product={product} />
              </div>
            )
          })
        }

        {
          jewelryProduct.map((product: any) => {
            return (
              <div key={product.id}>
                <CategoryWiseProduct product={product} />
              </div>
            )
          })
        }

        {
          electronicsProduct.map((product: any) => {
            return (
              <div key={product.id}>
                <CategoryWiseProduct product={product} />
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default HomePage;
