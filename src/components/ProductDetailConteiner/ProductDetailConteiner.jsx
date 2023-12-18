import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductDetail } from "../ProductDetail/ProductDetail"



export const ProductDetailConteiner = () =>{
    const [producto, setProducto] = useState(null)
    
    const {itemId} = useParams()
   
        
    useEffect(() =>{
        fetch("/Merceria-react/merceria.json")
        .then(response => response.json())
        .then(data => setProducto(data.find(prod => prod.id === Number(itemId))))
        
    },[itemId]);
    
    
  

    return(
        <section className="productDetailConteiner">
            <Link to={"/Merceria-react/"}><button className="text-white font-bold text-2xl w-28 h-13 bg-sky-700 rounded-lg p-2">Volver</button></Link>
            <ProductDetail item={producto}/>
        </section>
    )
}
