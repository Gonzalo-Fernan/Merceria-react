import { Link } from "react-router-dom"


export const AsideCategoryMenu = () =>{




    return(
        <section className="asideConteiner flex flex-col gap-4 w-28 items-start justify-center top-96">
            <Link to={"/Merceria-react/maquina/industrial"} className="link rounded-xl text-white p-2 text-2xl">
            <p>Industrial</p>
            </Link>
            <Link to={"/Merceria-react/maquina/familiar"} className="link rounded-xl text-white p-2 text-2xl">
            <p>Familiar</p>
            </Link>
            <Link to={"/Merceria-react/maquina/collareta"}  className="link rounded-xl text-white p-2 text-2xl">
            <p>Collareta</p>
            </Link>
            <Link to={"/Merceria-react/maquina/remalladora"}  className="link rounded-xl text-white p-2 text-2xl">
            <p>Remalladora</p>
            </Link>
            
        </section>
    )
        
}