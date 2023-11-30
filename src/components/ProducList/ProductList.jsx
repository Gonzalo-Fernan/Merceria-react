import { useFetch } from '../../useFetch'


export function ProductList(){
    const { data } = useFetch("merceria.json")

    return(
        <section className='productConteiner flex flex-col items-start justify-start mt-1'>
            <p className='listTitle font-bold text-2xl text-white'>Destacados de esta semana</p>
            <ul className='productList max-w-6xl flex flex-wrap gap-14 mt-8'>
                
                {data?.map((producto)=>(
                    <li key={producto.id} className='cardConteiner flex flex-col gap-2 items-center justify-start w-60  text-blue-100'>
                        <img className='imagenProducto' src={producto.thumbnail} />
                        <h2 className='text-2xl font-bold'>{producto.nombre}</h2>
                        <p>Envio Gratis</p>
                        <p>{producto.descripcion}</p>
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
}*/





