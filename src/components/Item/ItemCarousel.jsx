import React from "react";
import { Link } from "react-router-dom";

const ItemCarousel = (props) => {
    return (
        <div className="w-full group">
            <div className="max-w-50 max-h-50  overflow-y-hidden ">
                <Link to={`/product/${props.id}`}>
                    <img
                        className="w-full h-full"
                        onClick={window.scrollTo(0, 0)}
                        src={props.image}
                        alt=""
                    />
                </Link>
            </div>
            <div className="max-w-50 py-6 flex flex-col gap-1">
                <h2 className="text-lg text-primeColor font-bold">{props.name}</h2>
                <p className="text-[#767676] text-[14px]">${props.price}</p>
                {/* <div className="flex items-center justify-between ">
                    <h2 className="text-lg text-primeColor font-bold">{props.name}</h2>
                    <p className="text-[#767676] text-[14px]">${props.price}</p>
                </div> */}
            </div>
        </div>
    );
};

export default ItemCarousel;
