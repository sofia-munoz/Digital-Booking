
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

function App() {

  return (
    <div className="App">
      <AppHeader/>
      <Routes>
        <Route path='/' element={<AppBody data={getdatos()}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<CrearCuenta/>}/>
      </Routes>
      <AppFooter/>
    </div>
  );
}

export default App;
