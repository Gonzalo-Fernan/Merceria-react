import './App.css'
import  { Navbar }  from "./components/NavBar/Navbar.jsx"
import { ProductList } from "./components/ProducList/ProductList.jsx"
import { Footer } from './components/Footer/Footer.jsx'

function App() {
 
  return (
    <div className='mainConteiner'>
      <Navbar/>     
      <ProductList/>
      <Footer/>
      
      {/*aca esta la forma de los props pero quise probar hacer un fetch de merceria.json*/}
      {/*lo hice con un custom hook en el archivo useFetch.js para que se pueda reutilizar para consultar otras APIs*/}
      {/* <ProductList nombre={"tijeras de tela"} key={1} thumbnail={"../assets/images/tijeras.webp"} descripcion={"esto es la descripcion"}/> */}
      
    </div>
  )
}

export default App


