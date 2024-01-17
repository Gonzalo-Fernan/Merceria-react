import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { db } from "../../firebase/config";
import{ doc, getDoc } from "firebase/firestore";


export const ProductDetailConteiner = () =>{
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
   
        
    useEffect(() =>{
        const docRef = doc(db, "productos", itemId) 
        getDoc(docRef)
        .then((docSnapshot)=>{
            const doc = {
                ...docSnapshot.data(),
                id: docSnapshot.id 
            }
          setProducto(doc) 
          setLoading(false) 
        })
    },[itemId]);
    
    
  

    return(
        <>
            { loading
                    ?
                    <section className="loadingConteiner flex flex-col gap-4 text-white text-center items-center rounded-2xl p-10 w-auto font-semibold">
                        <h2 className="text-4xl">Cargando los datos...</h2>
                        <img src="../loading.gif" alt="loading gif" className="w-20 h-20"/>
                    </section>
                    :
                    <section className="productDetailConteiner">
                        <Link to={"/Merceria-react/catalogo"}><button className="volver text-white font-bold text-2xl w-28 h-13 bg-sky-700 rounded-lg p-2">Volver</button></Link>
                        <ProductDetail item={producto}/>
                    </section>
            }
        </>        
        )
}
