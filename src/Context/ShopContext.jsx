import React, { createContext, useState, useEffect } from 'react'
import all_product from '../components/Data/all_product'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  


export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : getDefaultCart();
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
        }));
        // แสดง Toast เมื่อเพิ่มสินค้าเข้าตะกร้า
        toast.success('Product added to cart!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                fontSize: '16px',
            },
            });
    };

    const addFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
          if (prev[itemId] === 1) {
            window.alert('The item will be removed from the cart');
          }
          return { ...prev, [itemId]: prev[itemId] - 1 };
        });
      };

    const removeAll = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
        // แสดง Toast เมื่อเพิ่มสินค้าเข้าตะกร้า
        toast.success('Product removed from cart!', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                fontSize: '16px',
            },
            });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount
    }

    const getTotalCartItem = () => {
        let totalItem = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // totalItem += cartItems[item]
                totalItem += 1
            }
        }
        return totalItem
    }

    const contextValue = { addFromCart,getTotalCartItem, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart, removeAll }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
