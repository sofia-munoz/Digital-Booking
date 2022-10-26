import './App.css';
import react , { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import AppFooter from './components/Footer';
import {getdatos} from './/data/datos';
import Login from './components/Login';
import CrearCuenta from './components/CrearCuenta';
import {Routes, Route, Link}  from "react-router-dom"
import {getcategorias} from './/data//categorias';
import {usuarioPrueba} from './/data//usuario'
import MenuDrawer from './components/MenuDrawer';

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


    console.log("APP userlogged:" + userLogged)

    const [showModal, setShowModal] = useState(false)
    const handleModalMenu = ()=>{
        setShowModal(!showModal);
    }

  return (

    <userContext.Provider value = {userLogged}>
    <userInfoContext.Provider value = {usuarioPrueba}>
    <div className="App">
      {showModal && <MenuDrawer handleLogOut={handleLogOut} handleModalMenu={handleModalMenu}/>}
      <Routes>
        <Route path='/login' element={<Header hideRegister handleModalMenu={handleModalMenu}/>}/>
        <Route path='/register' element={<Header hideLogin handleModalMenu={handleModalMenu}/>}/>
        <Route path='/' element={<Header handleLogOut={handleLogOut} handleModalMenu={handleModalMenu}/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Body data={getdatos()}  categorias={getcategorias()}/>}/>
        <Route path='/login' element={<Login dataUsuario={usuarioPrueba} handleUserLogged={handleUserLogged}/>}/>
        <Route path='/register' element={<CrearCuenta/>}/>
      </Routes>
      <AppFooter/>
    </div> 
    </userInfoContext.Provider>
    </userContext.Provider>
  );
}

export default App;
