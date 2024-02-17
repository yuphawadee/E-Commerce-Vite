import React, { useState } from 'react'
import NavTitle from '../../Item/NavTitle';
import { Link } from 'react-router-dom';

const Category = () => {
    const [showCategory, setShowCategory] = useState(true);
    
    const category = [
        { name: 'Shoes', href: '/shoes' },
        { name: 'T-shirt', href: '/t-shirt' },
        { name: 'Accessories', href: '/accessories' }
    ]
    return (
        <div>
            <div
                onClick={() => setShowCategory(!showCategory)}
                className="cursor-pointer"
            >
                <NavTitle title="Category" icons={true} />
            </div>
            {showCategory && (
                <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] pb-5">
                    {category.map((item, i) => (
                        <div key={i} >
                            <Link
                            to={item.href}
                            className="cursor-pointer  flex items-center gap-2 hover:text-primeColor  duration-300"                        >
                            {item.name}
                        </Link>
                        </div>
                        
                    ))}
                    <hr />
                </ul> 
                
            )}
        </div>
    )
}

export default Category