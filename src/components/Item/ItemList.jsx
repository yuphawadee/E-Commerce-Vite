import React from 'react'
import { Link } from 'react-router-dom'
// import './ItemList.css'

const ItemList = (props) => {
  return (
    <div>
       <div className="">
            <div className="grid gap-5">
                <Link to={`/product/${props.id}`}>
                    <img
                        className="w-[]  object-cover grid"
                        onClick={window.scrollTo(0, 0)}
                        src={props.image}
                        alt=""
                    />
                </Link>
            </div>
            <div className="max-w-50 py-6 flex flex-col gap-1">
                <h2 className="text-lg text-primeColor font-bold line-clamp-2">{props.name}</h2>
                <p className="text-[#767676] text-[14px]">${props.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemList