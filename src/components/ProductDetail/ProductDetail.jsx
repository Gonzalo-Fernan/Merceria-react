import { useState } from "react";


export const ProductDetail = ({ item }) =>{
    const [cantidad, setCantidad] = useState(1)

    const handleSubstract = () =>{
        cantidad > 1 && setCantidad(cantidad - 1) 
    }

    const handleAdd = () =>{
        setCantidad(cantidad + 1)
    }

    


    if (!item) {
        return <p>Producto no encontrado</p>;   
    }
    return(
        <section className="flex items-start justify-around w-full">
            <img className='w-72 h-72' src={item.thumbnail} />
            <div className="flex flex-col gap-6 items-center justify-center">
                <h2 className='font-bold text-white text-4xl'>{item.nombre}</h2>
                <h2 className='font-bold text-white text-4xl'>{item.marca}</h2>
                <h2 className='font-bold text-white text-4xl'>{item.modelo}</h2>
                <p className="text-white text-3xl w-96">{item.descripcion}</p>
                <p className="text-white text-4xl">${item.precio}</p>
                <div className="flex gap-4 ml-6 items-center justify-center">
                    <button onClick={handleSubstract} className='w-20 h-10 bg-slate-800 rounded-md p-2 text-white'>-</button>
                    <span className="text-white">{cantidad}</span>
                    <button onClick={handleAdd} className='w-20 h-10 bg-slate-800 rounded-md p-2 text-white'>+</button>
                </div>
                <button  className="w-96 h-10 bg-green-800 rounded-md p-2 text-white">Agregar al Carrito</button>    
            </div>
        </section>
    )
    
}