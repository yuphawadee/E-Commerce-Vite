import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const NavTitle = ({ title, icons }) => {
    const [isIconDown, setIsIconDown] = useState(true);
    const handleIconClick = () => {
        setIsIconDown(!isIconDown);
    };
  return (
    <div className="flex items-center justify-between pb-5" onClick={handleIconClick}>
            {icons ? (
                <>
                    <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
                    {isIconDown ? <FaAngleDown /> : <FaAngleUp />}
                </>
            ) : (
                    <>
                        {/* <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3> */}
                    </>
                )}
        </div>
  )
}

export default NavTitle