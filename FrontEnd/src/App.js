
import './App.css';
import react from 'react';
import Header from './components/Header';
import Body from './components/Body';
import AppFooter from './components/Footer';
import {getdatos} from './/data/datos';
import Login from './components/Login';
import CrearCuenta from './components/CrearCuenta';
import {Routes, Route, Link}  from "react-router-dom"
// import Login from './components/Login';
import {getcategorias} from './/data//categorias';
import {usuarioPrueba} from './/data//usuario'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Header hideRegister/>}/>
        <Route path='/register' element={<Header hideLogin/>}/>
        <Route path='/' element={<Header/>}/>
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
