import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Breadcrumbs from './Breadcrumbs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = (props) => {
  const { product } = props
  const { addToCart } = useContext(ShopContext)

  return (
    <div className="max-w-[1200px] m-auto  ">
      <div className="max-w-container mx-auto px-4">
        <Breadcrumbs product={product} />
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4  gap-4 pb-10 p-5">
          <div className="h-full w-full xl:col-span-2 lg:col-span-2 md:col-span-2 flex  justify-center">
            <img
              className="w-full h-full object-cover "
              src={product.image}
              alt={product.image}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-2 lg:col-span-2 flex justify-center">
            {/* <Product productInfo={productInfo} /> */}
            <div className='xl:w-[75%] lg:w-[75%] md:w-[75%]'>
              <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-semibold">{product.name}</h2>
                <p className="text-xl font-semibold">${product.price.toLocaleString()}</p>
                <p className="text-base text-gray-600">{product.des}</p>
                {/* <p className="text-sm">Be the first to leave a review.</p> */}
                <button
                  onClick={() => { addToCart(product.id) }}
                  className="w-full py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                >
                  <ToastContainer />
                  Add to Cart
                </button>
                <p className="font-normal text-sm">
                  <span className="text-base font-medium"> Categories: </span>
                  {product.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay