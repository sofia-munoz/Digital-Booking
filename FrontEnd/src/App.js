
import './App.css';
import react from 'react';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
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
        <Route path='/login' element={<AppHeader hideRegister/>}/>
        <Route path='/register' element={<AppHeader hideLogin/>}/>
        <Route path='/' element={<AppHeader/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<AppBody data={getdatos()}  categorias={getcategorias()}/>}/>
        <Route path='/login' element={<Login dataUsuario={usuarioPrueba}/>}/>
        <Route path='/register' element={<CrearCuenta/>}/>
      </Routes>
      <AppFooter/>
    </div>
  );
}

export default App;
