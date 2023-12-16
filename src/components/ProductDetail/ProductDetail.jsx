import { useState } from "react"



export const ProductDetail = ({item}) =>{
    const [cantidad, setCantidad] = useState(1)
    
    const add = () =>{
        setCantidad(cantidad + 1)
    }
    const substract = () =>{
        cantidad > 1 && setCantidad(cantidad - 1)
    }


    return(
        <section>
            <article>
                <img src={item.thumbnail} alt="" />
                <h2>{item.nombre}</h2>
                <p>{item.descripcion}</p>
                <button>Agregar al carrito</button>
                <div>
                    <button onClick={add}>+</button>
                    <span>1</span>
                    <button onClick={substract}>-</button>
                </div>
                
            </article>
            
        </section>
    )

}