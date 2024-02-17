import React, { useState } from 'react'
import NavTitle from '../../Item/NavTitle';
import { Link } from 'react-router-dom';

const Price = () => {
    const [showCategory, setShowCategory] = useState(true);
    
    const price = [
        { name: '< 1,000฿', href: '/shoes' },
        { name: '1,000฿ - 3,000฿', href: '/t-shirt' },
        { name: '3,000฿ - 5,000฿', href: '/accessories' },
        { name: '> 5,000฿', href: '/accessories' }
    ]
    return (
        <div>
            <div
                onClick={() => setShowCategory(!showCategory)}
                className="cursor-pointer"
            >
                <NavTitle title="Price" icons={true} />
            </div>
            {showCategory && (
                <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] pb-5">
                    {price.map((item, i) => (
                        <Link
                            key={i} to={item.href}
                            // className='cursor-pointer'
                            className="cursor-pointer  flex items-center gap-2 hover:text-primeColor  duration-300"                        >
                            {item.name}
                        </Link>
                    ))}
                    <hr />
                </ul> 
                
            )}
        </div>
    )
}

export default Price