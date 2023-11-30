import { ShoppingCart } from "../ShoppingCart/ShoppingCart"

export function Navbar() {
    return (
        <nav className="navbar flex w-full h-15 flex-row p-7 justify-between items-center">
            <div className="logo flex gap-3 items-center justify-center">
                <img className="w-22 h-28 invert" src="./LogoOtherness2-sinFondo.png" alt="" />
                <h1 className="text-2xl font-bold">Otherness Merceria</h1>
            </div>
            <ul className="linkList flex gap-9 text-2xl items-center justify-center mr-14">
                <li className="nav-element"><button >Iniciar Sesion</button></li>
                <li className="nav-element"><button>Catalogo</button></li>
                <li className="nav-element"><button>Maquinas</button></li>
                <li className="nav-element"><button>Contacto</button></li>
                <ShoppingCart/>
            </ul>
            
        </nav>
        
    )
}