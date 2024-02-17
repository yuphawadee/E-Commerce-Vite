import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Breadcrumbs from '../components/ProductDisplay/Breadcrumbs'

const Product = () => {
    const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div className='py-5'>
        <ProductDisplay product={product} />
    </div>  )
}

export default Product