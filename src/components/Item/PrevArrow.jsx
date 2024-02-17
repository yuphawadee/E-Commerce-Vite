import React from 'react'

const PrevArrow = (props) => {
    const { onClick } = props
  return (
    <div className='flex items-center'>
        <button className="slick-arrow prev absolute -top-16 right-16 z-10" onClick={onClick}>
             <svg width="45" height="45" viewBox="0 0 32 32" fill="none" xmlns="http:www.w3.org/2000/svg">
                 <circle opacity="0.2" cx="16" cy="16" r="16" fill="black"></circle>
                 <path d="M19 22L13 16L19 10" stroke="white" ></path>
             </svg>        
         </button>
    </div>
  )
}

export default PrevArrow