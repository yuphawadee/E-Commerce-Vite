import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { TbMenuDeep } from "react-icons/tb";
import { HiMiniXMark } from "react-icons/hi2";
import { Dialog } from '@headlessui/react';
import { ShopContext } from '../../Context/ShopContext';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shoes', href: '/shoes' },
    { name: 'T-shirt', href: '/t-shirt' },
    { name: 'Accessories', href: '/accessories' },
]
const Header = () => {
    const location = useLocation();
    const [showMobileInput, setShowMobileInput] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const { getTotalCartItem, all_product } = useContext(ShopContext)
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = (value) => {
        const results = value
            ? all_product.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase())
            )
            : [];

        setResults(results);
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    const handleResultClick = () => {
        setInput(''); // เซตค่า input เป็นว่างเมื่อคลิกที่ผลลัพธ์
        fetchData(''); // เซตค่า result เป็นว่างเมื่อคลิกที่ผลลัพธ์
    };

    return (
        <div className='max-w-[1350px] m-auto relative'>

            <div className='flex items-center justify-between'>
                {/* ========== logo start ========== */}
                <div className='w-[80px]'>
                    <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="100%" height="100%" fill="none"><path fill="currentColor" fillRule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clipRule="evenodd"></path></svg>
                </div>
                {/* ========== logo end ========== */}

                {/* ========== search start ==========*/}
                <div className='w-[40%]'>
                    <div className={`relative flex items-center lg:flex ${showMobileInput ? 'flex' : 'hidden'}`}>
                    <div className='flex items-center w-full '>
                        <div className='absolute left-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <input type="text" placeholder='What are you looking for?'
                            value={input}
                            onChange={(e) => handleChange(e.target.value)}
                            className='pl-10 bg-[#e5e7eb] rounded p-3 w-full h-[35px] text-[16px]'
                        />
                    </div>

                    {results.length > 0 && (
                        <ul className="absolute z-10 top-12  bg-white border border-gray-300 rounded-md shadow-md overflow-auto h-96 w-full">
                            {results.map((result, id) => (
                                <div key={id}>
                                     <Link to={`/product/${result.id}`}>
                                    <li 
                                    className="cursor-pointer p-2 hover:bg-gray-100"
                                    onClick={() => handleResultClick(result.name)} // เรียกฟังก์ชันเมื่อคลิกที่ผลลัพธ์
                                    >
                                        {result.name}
                                    </li>
                                </Link>
                                </div>
                                
                            ))}
                        </ul>
                    )}
                </div>
                </div>
                
                {/* ========== search end ==========*/}

                <div className='flex items-center gap-1'>
                    {/* ========== icon search mobil start ========== */}
                    <div className='flex items-center lg:hidden'>
                        {showMobileInput ? (
                            <div className='w-12 md:w-12 h-12 md:h-12 rounded-full  flex justify-center items-center hover:bg-black/[0.05] lg:hover:bg-transparent cursor-pointer '
                                onClick={() => setShowMobileInput(false)}
                            >
                                <HiMiniXMark className="text-[30px]" />
                            </div>
                        ) : (
                            <div className='w-12 h-12 rounded-full hover:bg-black/[0.05] flex justify-center items-center cursor-pointer'
                                onClick={() => setShowMobileInput(true)}>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        )}
                    </div>
                    {/* ========== icon search mobil end ========== */}

                    {/* ========== cart start ========== */}
                    <Link to={'/cart'}>
                        <div className='w-12 h-12 rounded-full justify-center flex items-center hover:bg-black/[0.05] cursor-pointer '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <span>{getTotalCartItem()}</span>
                        </div>
                    </Link>
                    {/* ========== cart end ========== */}

                    {/* ========== icon menu start ========== */}
                    <div className="lg:hidden w-12 h-12 flex rounded-full justify-center items-center hover:bg-black/[0.05] cursor-pointer" onClick={() => setMobileMenu(true)}>
                        <TbMenuDeep className="text-[24px]" />
                    </div>
                    {/* ========== icon menu end ========== */}
                </div>

            </div>

            <hr />
            <div className='hidden lg:flex justify-center items-center gap-[30px] py-5'>
                {navigation.map((item,i) => (
                    <NavLink
                        key={i}
                        to={item.href}
                        className={`cursor-pointer list-none hover:text-black hover:font-semibold  ${item.href === location.pathname ? 'font-semibold' : 'text-gray-500'}`}
                    >
                        <li>{item.name}</li>
                    </NavLink>
                ))}
            </div>

            <hr />
            <Dialog as="div" className="lg:hidden" open={mobileMenu} onClose={setMobileMenu} >
                <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black bg-opacity-25" />
                <Dialog.Panel className="fixed bg-white inset-y-0 right-0 z-50 w-[350px] overflow-y-auto px-5 py-4 ">
                    <div className="flex items-center justify-end">
                        <span className="sr-only">Close menu</span>
                        <div className='w-12 h-12 rounded-full hover:bg-black/[0.05] flex justify-center items-center cursor-pointer'
                            onClick={() => setMobileMenu(false)}>
                            <HiMiniXMark className="text-[30px]" />
                        </div>
                    </div>
                    <div className=" ">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50 outline-none"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>


    )
}

export default Header