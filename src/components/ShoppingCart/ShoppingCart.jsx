import { useState } from "react"
import shoppingCart from "../../assets/images/shopppinCart-sinFondo.png"




export const ShoppingCart = () => {
    const [showCartList, setShowCartList] = useState(false)
  

    return(
        <>
            <div className="cartConteiner p-1">
                    <button onClick={()=>{setShowCartList(!showCartList)}}>    
                        <img className="cart invert w-16 h-16" src={shoppingCart} alt="Shopping Cart icon" />
                    </button>
            </div>
            <div className={`cartList ${showCartList? "active" : "inactive"}`}>
                <h2>Productos agregados al carrito:</h2>
            </div>   
        </>
    )
}
