import React from 'react'

const Heading = ({ heading }) => {
  return <div>
    <div className="h-[45px] flex items-center text-3xl font-semibold ">{heading}</div>
    {/* <hr className='w-20 bg-red-500'></hr> */}
</div>

  }

export default Heading