import React from 'react'
import ProductCard from './ProductCard';

const SearchResult = ({ filterData }: { filterData: any }) => {

    if (!filterData || filterData.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className='w-[80%] h-fit pb-10 mx-auto'>
            <div className='mt-10'>
                <div>
                    <h1 className='font-bold text-2xl'>Results {filterData.length}</h1>
                    <p className='text-[#666159]'>Price and other details may vary based on product size and colour.</p>
                </div>

                <div className='grid grid-cols-4 gap-2 mt-3'>
                    {
                        filterData?.map((product: any) => {
                            return (
                                <div key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className=' w-full h-[20%] py-10 bg-white'></div>
        </div>
    )
}

export default SearchResult;
