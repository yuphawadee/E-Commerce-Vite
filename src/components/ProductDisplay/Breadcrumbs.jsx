import React from 'react'

const Breadcrumb = (props) => {
const {product}  =props
  return (
    <div className='p-4'>
        HOME / {product.category} / {product.name}    
    </div>
  )
}

export default Breadcrumb