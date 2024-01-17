import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";

export const ProductDetail = ({ item }) =>{
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart, showCartList, setShowCartList } = useContext(CartContext)
    


    const handleSubstract = () =>{
        cantidad > 1 && setCantidad(cantidad - 1) 
    }

    const handleAdd = () =>{
        setCantidad(cantidad + 1)
    }

    const handleAddToCart = () => {
        const cantidadSeleccinada = {...item, cantidad}
        addToCart(cantidadSeleccinada)
    }

    if(item){
    return (
                <section className="detailConteiner flex items-start justify-around w-full">
                            
                    <img className='w-72 h-72' src={item.thumbnail} />
                    <div className="descripcionDetail flex flex-col gap-6 items-center justify-center">
                        <h2 className='nombreProduct font-bold text-white text-4xl'>{item.nombre}</h2>
                        <h2 className='marcaProduct font-bold text-white text-4xl'>{item.marca}</h2>
                        <h2 className='modeloProduct font-bold text-white text-4xl'>{item.modelo}</h2>
                        <p className="descripcion text-white text-3xl w-96">{item.descripcion}</p>
                        <p className="text-white text-4xl">${item.precio}</p>
                        {
                        isInCart(item.id)
                            ? <>
                                <button className="terminarCompra w-full h-10 bg-blue-700 rounded-md p-2 text-white" onClick={()=>{setShowCartList(!showCartList)}}><Link>ir al carrito</Link></button> 
                                <button className="terminarCompra w-full h-10 bg-blue-900 rounded-md p-2 text-white"><Link to={"/Merceria-react/catalogo"}>Agregar mas productos</Link></button>
                            </>
                            :<>
                                <div className="cantidadPicker flex gap-4 ml-6 items-center justify-center">
                                    <button onClick={handleSubstract} className='w-20 h-10 bg-slate-800 rounded-md p-2 text-white'>-</button>
                                    <span className="text-white">{cantidad}</span>
                                    <button onClick={handleAdd} className='w-20 h-10 bg-slate-800 rounded-md p-2 text-white'>+</button>
                                </div>
                                <button onClick={handleAddToCart} className="agregarCarrito w-96 h-10 bg-green-800 rounded-md p-2 text-white">Agregar al Carrito</button>    
                            </>
                        }
            
                    </div>       
                </section>
    
    )
    
}}