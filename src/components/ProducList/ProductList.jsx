
import { useFetch } from '../../useFetch' 
import { Link } from 'react-router-dom';



export function ProductList(){
    const { data } = useFetch("merceria.json")
   
 

    return(
        <section className='productConteiner flex flex-col items-center justify-start mt-1'>
            <input className='rounded-md w-96 h-9 pl-3 bg-opacity-70 mt-28' type="text" placeholder='Busca tus productos aqui...' />
            <ul className='productList max-w-6xl flex flex-wrap flex-row-reverse gap-14 mt-8'>
                {/* map para recorrer los datos del fetch y crear las cards con los datos del json */}
                {data?.map((producto)=>( 
                    <li key={producto.id} className='cardConteiner flex flex-col gap-2 items-center justify-start w-60  text-blue-100'>
                        <img className='imagenProducto' src={producto.thumbnail} />
                        <h2 className='text-2xl font-bold'>{producto.nombre}</h2>
                        <p>Envio Gratis</p>
                        <p>{producto.descripcion}</p>
                        <Link to={`/Merceria-react/catalogo/${producto.id}`}>
                            <button className='w-20 h-10 bg-slate-800 rounded-md p-2'>Ver mas</button>
                        </Link>                  
                    </li>
                ))}  
            </ul>
        </section>
    )

}




/* Aca dejo como seria con los props, queria probar con el fetch del json 

export const ProductList = ( {key, nombre, thumbnail, descripcion} ) =>{

    return(
        <ul className='listaProductos'>
                <li key={key} className='cardConteiner'>
                    <img className='imagenProducto' src={thumbnail} />
                    <h2>{nombre}</h2>
                    <p>Envio Gratis</p>
                    <p>{descripcion}</p>
                </li> 
        </ul>
    )
}
 */


