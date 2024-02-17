import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import empty_cart from '../assets/empty-cart.jpg'
import { Link } from 'react-router-dom'
import { HiMiniXMark } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Item/Button'

const CartItem = () => {
    const { addFromCart, getTotalCartItem, getTotalCartAmount, all_product, cartItems, removeFromCart, removeAll, addToCart } = useContext(ShopContext)

    return (
        <div className='max-w-[1400px] m-auto'>
            {/* no-item */}
            {getTotalCartItem() === 0 &&
                <div className="flex-[2] flex flex-col items-center pb-[50px] ">
                    <img
                        src={empty_cart}
                        width={300}
                        height={300}
                        className="w-[300px] md:w-[400px]"
                    />
                    <span className="text-xl font-bold">
                        Your cart is empty
                    </span>
                    <span className="text-center mt-4">
                        Looks like you have not added anything in your cart.
                        <br />
                        Go ahead and explore top categories.
                    </span>
                    <Link
                        to={'/'}
                        className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                    >
                        Continue Shopping
                    </Link>
                </div>
            }
            {getTotalCartItem() > 0 &&
                <div>
                    <div className='cartitems-format-main'>
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                        <p>Remove</p>
                    </div>
                    <hr />
                    {Object.keys(cartItems).map((itemId, index) => {
                        const quantity = cartItems[itemId];
                        const product = all_product.find(item => item.id === parseInt(itemId));

                        if (product && quantity > 0) {
                            return (
                                <div className="cartitems-format-main" key={index}>
                                    <div className='flex items-center gap-[15px] pl-10'>
                                        <img className='carticon-product-icon w-[80px]' src={product.image} alt="" />
                                        <p className=''>{product.name}</p>
                                    </div>
                                    <p className=''>฿{product.price.toLocaleString()}</p>
                                    <div className='flex justify-center'>
                                        {/* ========== (ปุ่มเพิ่ม/ลดจำนวนสินค้า) ==========*/}
                                        <div className='cartitems-quantity flex items-center'>
                                            {cartItems[itemId]}
                                            <div className=''>
                                                <svg onClick={() => { addFromCart(product.id) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z" fill="black" />
                                                </svg>
                                                <svg onClick={() => { removeFromCart(product.id) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8.24268 8.63331L11.5427 5.33331L12.4854 6.27598L8.24268 10.5186L4.00002 6.27598L4.94268 5.33331L8.24268 8.63331Z" fill="black" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className=''>฿{(product.price * quantity).toLocaleString()}</p>
                                    {/* ========== (ปุ่มลบสินค้า) ============ */}
                                    <div className='flex justify-center'>
                                        <div
                                            onClick={() => {
                                                removeAll(product.id);
                                            }}
                                        // className="w-full rounded-full py-4 bg-black hover:bg-black duration-300 text-white text-lg font-titleFont"
                                        >
                                            <ToastContainer />
                                            <HiMiniXMark fontSize='32px' />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                    <hr className='pt-5' />
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                        <div className='flex justify-center'>
                            <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                                <input type="text" placeholder='What are you looking for?' className=' bg-[#e5e7eb] rounded p-3 h-[50px] w-[300px] text-[12px] flex' />
                                <div className='text-center'>
                                {/* <Button button='Apply Coupon' /> */}
                                <button className='py-4 px-8 w-[85%] rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>Apply Coupon</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center xl:justify-end w-full xl:px-[80px]'>
                            <div className='cartitems-total px-20 '>
                                <h1 className='text-xl font-medium pb-5 text-center'>Cart Total</h1>
                                <div className='flex justify-between items-center '>
                                    <p>Subtotal :</p>
                                    <p>${getTotalCartAmount().toLocaleString()}</p>
                                </div>
                                <hr />
                                <div className='flex justify-between items-center'>
                                    <p>Shipping :</p>
                                    <p>Free</p>
                                </div>
                                <hr />
                                <div className='flex justify-between items-center'>
                                    <p>Total :</p>
                                    <p>${getTotalCartAmount().toLocaleString()}</p>
                                </div>
                                <div className='pt-5'>
                                    <Button button='Procees to checkout' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default CartItem