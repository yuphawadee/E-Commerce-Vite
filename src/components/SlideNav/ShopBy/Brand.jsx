import React, { useState } from 'react'
import NavTitle from '../../Item/NavTitle';
import { Link } from 'react-router-dom';

const Brand = () => {
    const [showBrand, setShowBrand] = useState(true);
    const Brand = [
        { name: 'Jordan', href: '/Jordan' },
        { name: 'Nike By You', href: '/Nike By You' },
        { name: 'Nike Sportswear', href: '/Nike Sportswear' }
    ]

    return (
        <div>
            <div
                onClick={() => setShowBrand(!showBrand)}
                className="cursor-pointer"
            >
                <NavTitle title="Brand" icons={true} />
            </div>
            {showBrand && (
                <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] pb-5">
                    {Brand.map((item, i) => (
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

export default Brand