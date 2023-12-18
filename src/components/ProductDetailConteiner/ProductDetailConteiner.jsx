import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
            <ProductDetail item={producto}/>
        </section>
    )
}
