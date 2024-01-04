import { createContext, useState } from "react";



export const CartContext = createContext()

 export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
 
    const addToCart = (item) =>{
      setCart([...cart, item])
    }
    const isInCart = (id) =>{
      return cart.some((item)=> item.id === id )
    }
    const clearCart= () =>{
      setCart([])
    }
    const clearItem= (id) =>{
      setCart(cart.filter((item) => item.id !== id))
    } 
    const cartTotal = () =>{
      return cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    }

     return (
         <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            clearCart,
            clearItem,
            cartTotal
        }}>

            {children}

         </CartContext.Provider>

     )
 }