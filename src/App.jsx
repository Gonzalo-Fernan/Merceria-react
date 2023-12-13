import './App.css'
import  { Navbar }  from "./components/NavBar/Navbar.jsx"
import { Footer } from './components/Footer/Footer.jsx'
import { ProductSlider } from './components/ProducSlider/ProductSlider.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginRegister } from './components/LoginRegister/LoginRegiste.jsx' 
import { Contact } from './components/Contact/Contact.jsx'
import { ProductList } from './components/ProducList/ProductList.jsx'
import { Maquinas } from './components/Maquinas/Mquinas.jsx'
function App() {
 
  return (

    <div className='mainConteiner'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Merceria-react' element={<ProductSlider/>}/>
          <Route path='/Merceria-react/iniciar-sesion' element={<LoginRegister/>}/>
          <Route path='/Merceria-react/contacto' element={<Contact/>}/>
          <Route path='/Merceria-react/catalogo' element={ <ProductList/> }/> 
          <Route path='/Merceria-react/maquinas' element={ <Maquinas/> }/> 
          <Route path='*' element={ <Navigate to={"/Merceria-react"}/>}/>
        </Routes>
           
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App


