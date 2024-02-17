import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TbMenuDeep } from "react-icons/tb";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shoes', href: '/shoes' },
    { name: 'T-shirt', href: '/t-shirt' },
    { name: 'Accessories', href: '/accessories' },
]

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <div className='max-w-[1350px] m-auto '>
            <div className='flex items-center justify-between'>
                <div className='w-[80px]'>
                    <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="100%" height="100%" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
                </div>
                {/* ========== search start ==========*/}
                <div className='w-[50%]'>
                    <div className='flex items-center relative'>
                        <input type="text" placeholder='What are you looking for?' className='pl-10 bg-[#e5e7eb] rounded p-3 w-full h-[35px] text-[12px] hidden lg:flex' />
                        <div className='absolute lg:flex hidden lg:left-0 -left-12 w-12 md:w-12 h-12 md:h-12 rounded-full justify-center items-center hover:bg-black/[0.05] lg:hover:bg-transparent cursor-pointer '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* ========== search end ==========*/}
                <div className='flex items-center gap-1'>
                    <div className='flex items-center lg:hidden'>
                        {/* <input type="text" placeholder='What are you looking for?' className='pl-10 bg-[#e5e7eb] rounded p-3 w-full h-[35px] text-[12px] hidden lg:flex' /> */}
                        <div className='w-12 md:w-12 h-12 md:h-12 rounded-full  flex justify-center items-center hover:bg-black/[0.05] lg:hover:bg-transparent cursor-pointer '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                    {/* ========== cart start ========== */}
                    <Link to={'/cart'}>
                        <div className='w-12 h-12 rounded-full justify-center flex items-center hover:bg-black/[0.05] cursor-pointer '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            {/* <span>{getTotalCartItem()}</span> */}
                        </div>
                    </Link>
                    {/* ========== cart end ========== */}
                    <div className="lg:hidden w-12 h-12 flex rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer" onClick={() => setMobileMenu(true)}>
                        <TbMenuDeep
                            className="text-[24px]"
                        />
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex justify-center items-center gap-[30px]'>
                {navigation.map((item) => (
                    <Link key={item.name} to={item.href}
                        className={({ isActive }) => {
                            return "" +
                                (!isActive
                                    ? ''  // ไม่ active
                                    : 'text-[#141718]' // active
                                )
                        }}>
                        <li className='cursor-pointer list-none'>{item.name}</li>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar