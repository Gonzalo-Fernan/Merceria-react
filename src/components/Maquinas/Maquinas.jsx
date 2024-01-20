
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../firebase/config"

export const Maquinas = () => {
    const [productos, setProductos]  = useState([])
    const [loading, setLoading] = useState(true)
    const categoryID = useParams(null) 

     useEffect(()=>{
        const productosRef = collection( db, "productos")
        const docsRef = categoryID ? query(productosRef, where('categoria', '==', 'maquina')) : productosRef
       
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
        <>
        <section className="mt-10">
            <h2 className="tituloMaquinas text-white text-3xl font-bold">Máquinas de Coser</h2>
            <article>
                <ul className='productList max-w-6xl flex flex-wrap flex-row-reverse gap-14 mt-8'>
                    {loading
                        ? <section className="loadingConteiner flex flex-col gap-4 text-white text-center items-center rounded-2xl p-10 w-auto font-semibold">
                            <h2 className="text-4xl">Cargando los datos...</h2>
                            <img src="./loading.gif" alt="loading gif" className="w-20 h-20"/>
                         </section>
                        : productos.map((producto)=>( 
                            <li key={producto.id} className='flex flex-col gap-2 items-start justify-start w-60  text-blue-100'>
                                <img className='imagenProducto' src={producto.thumbnail} />
                                <h2 className='text-2xl font-bold'>{producto.marca}</h2>
                                <p>{producto.modelo}</p>
                                <p>{producto.descripcion}</p>
                                <Link to={`/Merceria-react/catalogo/${producto.id}`}>
                                    <button className='w-20 h-10 bg-slate-800 rounded-md p-2'>Ver más</button>
                                </Link>  
                            </li>))}
                        </ul>
                </article>
        </section>
        </>
    )
}




