import React from 'react'

const Subtotal = ({ length, left, totalPrice }: { length: number, left: boolean, totalPrice: number }) => {
    return (
        <div>
            <h1 className={`text-sm sm:text-lg ${left ? 'text-center' : 'text-right px-2 font-medium'}`}>
                {`Subtotal (${length} ${length === 1 ? "item" : "items"}): `}
                <span className={`text-lg sm:text-xl md:text-3xl ${left ? 'font-semibold text-[#f9a034]' : 'font-bold text-[#f9a034]'}`}>
                    {`$ ${totalPrice}`}
                </span>
            </h1>
        </div>

    )
}

export default Subtotal;
