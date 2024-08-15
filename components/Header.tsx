"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import amazonLogo from "../public/amazon-logo-2.webp";
import { BiCart } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import { supabase } from '@/lib/supabase/products';

const itemList = [
    "All",
    "Fresh",
    "Amazon miniTV",
    "Sell",
    "Gift Cards",
    "Mobiles",
    "Prime",
    "Customer Service",
    "Electronics",
    "Fashion",
    "Amazon Pay",
];

const Header = () => {
    const [query, setQuery] = useState<string>("");
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    const cart = useAppSelector(getCart);

    const searchHandler = () => {
        if (query.trim()) {
            router.push(`/search/${query}`);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchHandler();
        }
    };

    useEffect(() => {
        const getUserData = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        getUserData();
    }, []);

    return (
        <>
            <div className='bg-[#131921] text-white'>
                <div className='flex items-center justify-between w-[95%] mx-auto py-1'>
                    <div className='border border-transparent hover:border-white rounded-sm p-[11px]'>
                        <Link href={'/'}>
                            <Image src={amazonLogo} alt={"logo"} width={100} height={100} />
                        </Link>
                    </div>
                    <div className='flex items-center justify-end w-[600px] relative'>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyPress}  // Listening for Enter key press
                            className='w-[90%] p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#ff9900]'
                            type="text"
                            placeholder='Search Amazon.in'
                        />
                        <div
                            onClick={searchHandler}  // Mouse click on search icon
                            className='bg-[#FEBD69] text-black rounded-e-md absolute top-0 right-0 px-[10px] py-[5px] hover:bg-[#F3A847] cursor-pointer'>
                            <AiOutlineSearch className='text-[#333333]' size={"30px"} />
                        </div>
                    </div>
                    <div className='flex items-center justify-around w-[24%]'>
                        <div onClick={() => {
                            router.push('/signin');
                        }} className='account cursor-pointer border border-transparent hover:border-white rounded-sm p-[9px]'>
                            <h1 className='text-xs hover:underline'>{`${user ? user?.identities[0]?.identity_data.full_name : "Hello, SignIn"}`}</h1>
                            <h1 className='font-semibold text-sm'>Account & Lists</h1>
                        </div>
                        <div className='orders cursor-pointer border border-transparent hover:border-white rounded-sm p-[9px]'>
                            <p className='text-xs'>Return</p>
                            <h1 className='font-semibold text-sm'>& Orders</h1>
                        </div>
                        <Link href={"/cart"} className=' cart relative cursor-pointer border border-transparent hover:border-white rounded-sm py-[6.5px] px-[9px]'>
                            <p className='absolute inline-block -top-[3px] left-[27px] text-[#F08804] font-bold'>{cart.length}</p>
                            <div className='flex'>
                                <div>
                                    <BiCart size={"40px"} />
                                </div>
                                <h1 className='mt-4 text-md font-semibold'>Cart</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
            <div className='bg-[#232F3E] text-white w-full py-[3.3px] px-3 flex items-center justify-between'>
                <div>
                    {itemList.map((link, idx) => {
                        return (
                            <Link key={idx} href={`/${link}`} className='mx-2 border border-transparent hover:border-white rounded-sm p-[11px] font-medium text-sm'>
                                {link}
                            </Link>
                        )
                    })}
                </div>
                <div className='p-0'>
                    <h1
                        onClick={async () => {
                            const { error } = await supabase.auth.signOut();
                            router.replace('/signin');
                        }}
                        className='text-[#FEBD69] font-bold cursor-pointer hover:text-[#ff9900] rounded-sm border border-transparent hover:border-white hover:underline transition py-1 px-2'>Sign out</h1>
                </div>
            </div>
        </>
    );
}

export default Header;
