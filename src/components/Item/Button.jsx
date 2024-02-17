import React from 'react'

const Button = ({button}) => {
    return (
        <div className='text-center'>
            <button className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">{button}</button>
        </div>
    )
}

export default Button