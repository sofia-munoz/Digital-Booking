
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

function App() {

    const [showModal, setShowModal] = useState(false)
    const handleModalMenu = ()=>{
        setShowModal(!showModal);
    }

  return (
    <div className="App">
        {showModal && <MenuDrawer handleModalMenu={handleModalMenu}/>}
      <Routes>
        <Route path='/login' element={<Header hideRegister handleModalMenu={handleModalMenu}/>}/>
        <Route path='/register' element={<Header hideLogin handleModalMenu={handleModalMenu}/>}/>
        <Route path='/' element={<Header hideLogin hideRegister handleModalMenu={handleModalMenu}/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Body data={getdatos()}  categorias={getcategorias()}/>}/>
        <Route path='/login' element={<Login dataUsuario={usuarioPrueba}/>}/>
        <Route path='/register' element={<CrearCuenta/>}/>
      </Routes>
      <AppFooter/>
      
    </div>
  );
}

export default App;
