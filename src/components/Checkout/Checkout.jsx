import { useState, useContext} from "react"
import { CartContext } from "../context/CartContext"
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom"; 

export const Checkout = () =>{
    const { cart, cartTotal, clearCart } = useContext(CartContext)
    const [orderId, setOrderId]= useState("")
    const [values, setValues] = useState({
        nombre: "",
        telefono: "",
        email: ""
    })


    const handleInputChange = (e) =>{
        console.log(e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const orden = {
            cliente : values,
            item : cart,
            total: cartTotal(),
            fecha: new Date()
        }
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, orden).then(doc => {
            setOrderId(doc.id)
            clearCart()
        })

    } 

    if (orderId) {
        return(
            <article className="orderConteiner flex flex-col gap-5 text-white bg-slate-950 p-10 rounded-xl">
                <h2 className="text-5xl">Tu compra se realizó tu compra con exito</h2>
                <h3 className="text-2xl" >Gracias por confiar en nosotros</h3>
                <p className="font-semibold">Tu identificador de orden es: {orderId}</p>
                <Link to={"/Merceria-react/catalogo"}><button className="h-10 bg-blue-800 rounded-md p-2 text-white w-80">Volver al catalogo</button></Link>
            </article>

        )
    }

    return(
        <section>
            <article className="flex flex-col gap-8 items-center justify-start">
                <h2 className="text-white text-4xl font-semibold ">Terminar compra</h2>
                <h3 className="text-white text-2xl font-semibold ">Ingresa tus datos:</h3>
                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4 ">
                    <input onChange={handleInputChange} name="nombre" value={values.nombre} className="p-4 rounded-xl w-96" type="text" placeholder="Nombre y Apellido"/>
                    <input onChange={handleInputChange} name="telefono" value={values.telefono} className="p-4 rounded-xl w-96" type="text" placeholder="Numero de Telefono"/>
                    <input onChange={handleInputChange} name="email" value={values.email} className="p-4 rounded-xl w-96" type="email" placeholder="e-mail"/>
                    <button type="submit" className="h-10 bg-slate-800 rounded-md p-2 text-white">Enviar</button>
                </form>
            </article>
        </section>
    )
}