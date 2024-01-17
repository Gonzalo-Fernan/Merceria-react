import { Link } from "react-router-dom"


export const Landing = () =>{
    return(
        <section className="landingConteiner">
            <article className="flex flex-col w-full items-center justify-center">
                <h2 className="tituloLanding font-bold text-white text-7xl">Otherness Merceria</h2>
                <p className="subTituloLanding font-semibold text-white text-2xl mt-6">Encontrá todo lo que necesitas facíl y rápido</p>
                <Link to={"/Merceria-react/catalogo"}><button className="font-semibold rounded-xl p-4 bg-sky-900 text-white mt-14">Ir a Catalogo</button></Link>                
            </article>
        </section>
    )
}