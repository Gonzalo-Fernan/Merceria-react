

import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from "../../firebase/config"


export function ProductList(){
   const [productos, setProductos]  = useState([])
   const [loading, setLoading] = useState(true)
   const { categoryID } = useParams() 


   useEffect(()=>{
    const productosRef = collection( db, "productos")
    const docsRef = categoryID ? query(productosRef, where('categoria', '==', 'maquina')) :productosRef

    getDocs( docsRef )
    .then(querySnapshot =>{
        const docs = querySnapshot.docs.map(doc => {
            return{
                ...doc.data(),
                id: doc.id 
            }
        })
        setProductos(docs)
        setLoading(false)
    })

   },[categoryID])
   
    return(
        <section className='productConteiner flex flex-col items-center justify-start mt-1'>
            <input className='buscar rounded-md w-96 h-9 pl-3 bg-opacity-70 mt-28' type="text" placeholder='Busca tus productos aqui...' />
            <ul className='productList max-w-6xl flex flex-wrap flex-row-reverse gap-14 mt-8'>
                {/* map para recorrer los datos del fetch y crear las cards con los datos del json */}
                 {loading
                    ?<section className="loadingConteiner flex flex-col gap-4 text-white text-center items-center rounded-2xl p-10 w-auto font-semibold">
                        <h2 className="text-4xl">Cargando los datos...</h2>
                        <img src="./loading.gif" alt="loading gif" className="w-20 h-20"/>
                    </section>
                    :productos.map((producto)=>( 
                        <li key={producto.id} className='cardConteiner flex flex-col gap-2 items-center justify-start w-60  text-blue-100'>
                            <img className='imagenProducto' src={producto.thumbnail} />
                            <h2 className='text-2xl font-bold'>{producto.nombre}</h2>
                            <h3 className='text-3xl font-semibold'>{producto.marca}</h3>
                            <h4>{producto.modelo}</h4>
                            <p>{producto.descripcion}</p>
                            <Link to={`/Merceria-react/catalogo/${producto.id}`}>
                                <button className='w-20 h-10 bg-slate-800 rounded-md p-2 mt-3'>Ver mas</button>
                            </Link>                  
                        </li>
                    ))}  
                </ul>
        </section>
    )

}


