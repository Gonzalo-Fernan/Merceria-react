import { ShoppingCart } from "../ShoppingCart/ShoppingCart"
import { Link } from "react-router-dom"
export function Navbar() {
    return (
        <nav className="navbar flex w-full h-15 flex-row p-7 justify-between items-center">
            <div className="logo flex gap-3 items-center justify-center">
                <Link to={"/Merceria-react/"}  className="flex items-center">
                <img className="w-22 h-28 invert" src="./LogoOtherness2-sinFondo.png" alt="" />
                <h1 className="text-2xl font-bold">Otherness Merceria</h1>
                </Link>
            </div>
            <ul className="linkList flex gap-9 text-2xl items-center justify-center mr-14">
                <Link to={"/Merceria-react/iniciar-sesion"} className="nav-element"><button >Iniciar Sesion</button></Link>
                <Link to={"/Merceria-react/catalogo"} className="nav-element"><button>Catalogo</button></Link>
                <Link to={"/Merceria-react/maquinas"} className="nav-element"><button>Maquinas</button></Link>
                <Link to={"/Merceria-react/contacto"} className="nav-element"><button>Contacto</button></Link>
                <ShoppingCart/>
            </ul>
            
        </nav>
        
    )
}