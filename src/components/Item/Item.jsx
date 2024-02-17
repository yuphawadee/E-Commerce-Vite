import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="w-full relative group">
      <div className="max-w-50 max-h-50  overflow-y-hidden ">
        <div>
        <Link to={`/product/${props.id}`}>
         <img className='w-full h-full' onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      </Link>
          {/* <img className="w-full h-full" imgSrc='' /> */}
          {/* <img className='w-full h-full' src={props.image} alt="" /> */}
        </div>
      </div>
      <div className="max-w-50 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.name}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div>
          {/* <p className="text-[#767676] text-[14px]">{props.color}</p> */}
        </div>
      </div>
    </div>
  );
};


export default Item