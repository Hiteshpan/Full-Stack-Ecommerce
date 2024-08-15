import React from 'react'

const Subtotal = ({ length, left, totalPrice }: { length: number, left: boolean, totalPrice: number }) => {
    return (
        <div>
            <h1 className={`${left ? 'text-center text-sm' : ' text-right px-2 font-medium text-lg'}`}>{`Subtotal (${length} ${length === 1 ? "item" : "items"}): `}<span className={`${left ? 'text-center font-semibold text-lg text-[#f9a034]' : 'font-bold text-3xl text-[#f9a034]'}`}>{`$ ${totalPrice}`}</span></h1>
        </div>
    )
}

export default Subtotal;
