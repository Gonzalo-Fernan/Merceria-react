import { useContext, useState } from "react"
import shoppingCart from "../../assets/images/shopppinCart-sinFondo.png"
import { CartContext } from "../context/CartContext"
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt.esm"
import { Link } from "react-router-dom"



export const ShoppingCart = () => {
    const { cart, clearCart, clearItem, cartTotal, showCartList, setShowCartList  } = useContext(CartContext)

    

    return(
        <>
            <div className="cartConteiner p-1">
                    <button onClick={()=>{setShowCartList(!showCartList)}}>    
                        <img className="cart invert w-20 h-20" src={shoppingCart} alt="Shopping Cart icon" />
                    </button>
            </div>
            <div className={`cartList ${showCartList? "active" : "inactive"}`}>
                <h2 className="text-2xl mb-4">Productos agregados al carrito:</h2>
                <ul className="w-full relative">
                    { 
                     cart.map((prod) =>{
                        return(
                                <li key={prod.id} className="flex gap-2">
                                    <p>{prod.cantidad}</p>
                                    <h3 className="text-white text-1xl">{prod.nombre}</h3>
                                    <h3 className="text-white text-1xl">{prod.marca}</h3>
                                    <p>${prod.precio}</p>
                                    <p>Monto: {prod.precio * prod.cantidad}</p>
                                    <button onClick={()=> clearItem(prod.id)} className="w-7 h-7 flex items-center justify-center"><FaTrashAlt /></button>
                                </li>
                            );
                        })  
                    }
                </ul>
                <p className={`absolute bottom-12 left-4 text-2xl font-semibold bg-white text-black p-2 rounded-xl ${cart.length? "active": "inactive"}`}>Total:  ${cartTotal()}</p>
                <button onClick={clearCart} className={`bg-blue-800 w-36 h-7 rounded-xl absolute bottom-2 left-4 ${cart.length? "active": "inactive"}`}>Limpiar Carrito</button>
                <Link to='/Merceria-react/checkout'><button className={`bg-green-600 w-40 h-7 rounded-xl absolute bottom-2 left-44  ${cart.length? "active": "inactive"}`}>Terminar mi compra</button></Link>
            </div> 
        </>
    )
}


