"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase/products'

const Signin = () => {
    return (
        <div className='absolute top-0 py-16 bg-white w-full'>
            <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[24%] mx-auto'>
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                />
            </div>
        </div>
    )
}

export default Signin
