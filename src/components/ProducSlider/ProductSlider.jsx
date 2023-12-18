import { useFetch } from '../../useFetch'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export const ProductSlider = () =>{
    const { data } = useFetch("merceria.json")

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
        
        <section className='productConteiner flex flex-col items-start justify-center'>
            <h2 className=' welcome text-3xl text-white font-bold mb-10'>Bienvenido a OTHERNESS Merceria, tu merceria online. Facil y rapido.</h2>
            <p className='listTitle font-bold text-2xl text-white'>Estos son los destacados de esta semana</p>
            <hr/>
            <ul className='productListSlider'>
                {/* map para recorrer los datos del fetch y crear las cards con los datos del json */}
                
                    <Slider className='slider' {...settings}>
                        {data?.map((producto)=>( 
                            <li key={producto.id} className='cardConteinerSlider flex  gap-2 items-center justify-center text-blue-100'>
                                <img className='imagenProducto' src={producto.thumbnail} />
                                <h2 className='text-2xl font-bold'>{producto.nombre}</h2>
                                <p>Envio Gratis</p>
                                <p>{producto.descripcion}</p>
                                <Link to={`/Merceria-react/catalogo/${producto.id}`}>
                                    <button className='w-20 h-10 bg-slate-800 rounded-md p-2'>Ver mas</button>
                                </Link>  
                            </li>
                        ))}
                    </Slider>
                  
            </ul>
        </section>
       
    )


}