import './App.css';
import react , { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Formularios/Login';
import CrearCuenta from './components/Formularios/CrearCuenta';
import {Routes, Route}  from "react-router-dom"
import usuario from './mocks/api/usuario.json'
import MenuDrawer from './components/MenuDrawer/MenuDrawer';
import ProductPage from './components/ProductsPage/ProductPage'
import BodyHome from './components/Body/BodyHome';

export const userContext = react.createContext();
export const userInfoContext = react.createContext();

function App() {

    const[userLogged, setUserLogged]=useState(false)
    const handleUserLogged = ()=>{
    setUserLogged(true)
    }

    const handleLogOut =()=>{
      setUserLogged(false)
      localStorage.removeItem('userName')
      localStorage.removeItem('userLastName')
      localStorage.removeItem('userAvatar')
    }

    const [showModal, setShowModal] = useState(false)
    const handleModalMenu = ()=>{
        setShowModal(!showModal);
    }

  return (

    <userContext.Provider value = {userLogged}>
    <userInfoContext.Provider value = {usuario}>
    <div className="App">
      {showModal && <MenuDrawer handleLogOut={handleLogOut} handleModalMenu={handleModalMenu}/>}  
      <Header handleLogOut={handleLogOut} handleModalMenu={handleModalMenu}/>
      <Routes>
        <Route path='/' element={<BodyHome/>}/>
        <Route path='/login' element={<Login usuario={usuario} handleUserLogged={handleUserLogged}/>}/>
        <Route path='/register' element={<CrearCuenta/>}/>
        <Route path='/products/:id' element={<ProductPage/>}/>
      </Routes>
      <Footer/>
    </div> 
    </userInfoContext.Provider>
    </userContext.Provider>
  );
}

export default App;
