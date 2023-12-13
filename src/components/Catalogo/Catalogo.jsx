import { useParams } from "react-router-dom"
import { ProductList } from "../ProducList/ProductList"



export const Catalogo = () => {
    const param = useParams()

    return(
        <section className="catalogoConteiner">
            <ProductList/>
        </section>
    )

}