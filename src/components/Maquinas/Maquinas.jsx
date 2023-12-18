
import { useFetch } from "../../useFetch";
import { AsideCategoryMenu } from "../AsideCategoryMenu/AsideCategoryMenu";
import { Link, useParams } from "react-router-dom";


export const Maquinas = () => {
    const { data } = useFetch("/Merceria-react/merceria.json")
  
    return(
        <>
        <section className="mt-10">
            <h2 className="text-white text-3xl font-bold">Maquinas de Coser</h2>
            <article>
                <ul className='productList max-w-6xl flex flex-wrap flex-row-reverse gap-14 mt-8'>
                    { data?.map((producto)=>( 
                        <li key={producto.id} className='flex flex-col gap-2 items-start justify-start w-60  text-blue-100'>
                            <img className='imagenProducto' src={producto.thumbnail} />
                            <h2 className='text-2xl font-bold'>{producto.marca}</h2>
                            <p>{producto.modelo}</p>
                            <p>{producto.categoria}</p>
                            <p>{producto.descripcion}</p>
                            <Link to={`/Merceria-react/catalogo/${producto.id}`}>
                                <button className='w-20 h-10 bg-slate-800 rounded-md p-2'>Ver mas</button>
                            </Link>  
                        </li>
                    ))}  
                </ul>
            </article>
        </section>
        {/* <AsideCategoryMenu/> */}
        </>
    )
}




