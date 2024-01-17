import './App.css'
import  { Navbar }  from "./components/NavBar/Navbar.jsx"
import { Footer } from './components/Footer/Footer.jsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginRegister } from './components/LoginRegister/LoginRegiste.jsx' 
import { Contact } from './components/Contact/Contact.jsx'
import { Maquinas } from './components/Maquinas/Maquinas.jsx'
import { Catalogo } from './components/Catalogo/Catalogo.jsx'
import { ProductDetailConteiner } from './components/ProductDetailConteiner/ProductDetailConteiner.jsx'
import { CartProvider } from './components/context/CartContext.jsx'
import { Landing } from './components/Landing/Landing.jsx'
import { ProductList } from './components/ProducList/ProductList.jsx'
import { Checkout } from './components/Checkout/Checkout.jsx'


function App() {
 
  
  return (
    
    <div className='mainConteiner'>
      <CartProvider>

        <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path='/Merceria-react/' element={<Landing/>} /> 
            <Route path='/Merceria-react/iniciar-sesion' element={<LoginRegister />} />
            <Route path='/Merceria-react/contacto' element={<Contact />} />
            <Route path='/Merceria-react/catalogo' element={<ProductList />} />
            <Route path='/Merceria-react/catalogo/:itemId' element={<ProductDetailConteiner />} />
            <Route path='/Merceria-react/:categoria' element={<Maquinas />} />
            <Route path='/Merceria-react/checkout' element={<Checkout/>} /> 
          
            <Route path='*' element={<Navigate to={'/'} />} />
          </Routes>
            
          <Footer/>

        </BrowserRouter>

      </CartProvider>
    </div>
  )
}
export default App


