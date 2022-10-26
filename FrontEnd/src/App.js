
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

export const userContext1 = react.createContext();
export const userContext2 = react.createContext();

function App() {

    const[userLogged, setUserLogged]=useState(false)
    const handleUserLogged = ()=>{
    setUserLogged(!userLogged)
    }

    console.log("APP userlogged:" + userLogged)

    const [showModal, setShowModal] = useState(false)
    const handleModalMenu = ()=>{
        setShowModal(!showModal);
    }

  return (

    <userContext1.Provider value = {userLogged}>
    <userContext2.Provider value = {usuarioPrueba}>
    <div className="App">
        {showModal && <MenuDrawer handleModalMenu={handleModalMenu}/>}
      <Routes>
        <Route path='/login' element={<Header hideRegister handleModalMenu={handleModalMenu}/>}/>
        <Route path='/register' element={<Header hideLogin handleModalMenu={handleModalMenu}/>}/>
        <Route path='/' element={<Header hideLogin hideRegister handleModalMenu={handleModalMenu}/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Body data={getdatos()}  categorias={getcategorias()}/>}/>
        <Route path='/login' element={<Login dataUsuario={usuarioPrueba} handleUserLogged={handleUserLogged}/>}/>
        <Route path='/register' element={<CrearCuenta/>}/>
      </Routes>
      <AppFooter/>
    </div>
    </userContext2.Provider>
    </userContext1.Provider>
  );
}

export default App;
