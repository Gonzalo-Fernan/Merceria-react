import shoppingCart from "../../assets/images/shopppinCart-sinFondo.png"


export const ShoppingCart = () => {
    

    return(
        <div className="cartConteiner p-1">
            <button>    
            <img className="cart invert w-16 h-16" src={shoppingCart} alt="Shopping Cart icon" />
            </button>
        </div>
    )
}