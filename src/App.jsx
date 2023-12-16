import './App.css'
import  { Navbar }  from "./components/NavBar/Navbar.jsx"
import { Footer } from './components/Footer/Footer.jsx'
import { ProductSlider } from './components/ProducSlider/ProductSlider.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginRegister } from './components/LoginRegister/LoginRegiste.jsx' 
import { Contact } from './components/Contact/Contact.jsx'
import { Maquinas } from './components/Maquinas/Maquinas.jsx'
import { Catalogo } from './components/Catalogo/Catalogo.jsx'



function App() {
 
  return (

    <div className='mainConteiner'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Merceria-react/' element={<ProductSlider/>}/>
          <Route path='/Merceria-react/iniciar-sesion' element={<LoginRegister/>}/>
          <Route path='/Merceria-react/contacto' element={<Contact/>}/>
          <Route path='/Merceria-react/catalogo' element={ <Catalogo/> }/> 
          <Route path='/Merceria-react/maquinas' element={ <Maquinas/> }/>
          <Route path='/Merceria-react/maquinas/:categoria' element={ <Maquinas/> }/> 
          <Route path='*' element={ <Navigate to={'/Merceria-react/'}/> }/>
        </Routes>
           
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
export default App


