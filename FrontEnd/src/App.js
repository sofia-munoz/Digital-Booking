import './App.css';
import react , { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Formularios/Login';
import CrearCuenta from './components/Formularios/CrearCuenta';
import {Routes, Route}  from "react-router-dom";
import usuario from './mocks/api/usuario.json';
import MenuDrawer from './components/MenuDrawer/MenuDrawer';
import ProductPage from './components/ProductsPage/ProductPage'
import BodyHome from './components/Body/BodyHome';

export const userContext = react.createContext();
export const userInfoContext = react.createContext();

function App() {
    const[userLogged, setUserLogged]=useState(localStorage.getItem(false))
    const [userInfo, setUserInfo] = useState({})
    
    const handleUserLogged = (userObj)=>{
      setUserLogged(true)
      localStorage.setItem("userToken", userObj.tokenJWT)

      const avatar = (userObj.name.charAt(0)+userObj.lastName.charAt(0)).toUpperCase()
      userObj.avatar = avatar;
      setUserInfo(userObj)
    }

    const handleLogOut =()=>{
      setUserLogged(false)
      localStorage.removeItem("userToken")
      setUserInfo({})
    }

    const [showModal, setShowModal] = useState(false)
    const handleModalMenu = ()=>{
        setShowModal(!showModal);
    }

  return (
    <userContext.Provider value = {userLogged}>
    <userInfoContext.Provider value = {userInfo}>
  
    <div className="App">
      {showModal && <MenuDrawer handleLogOut={handleLogOut} handleModalMenu={handleModalMenu}/>}  
      <Header handleLogOut={handleLogOut} handleModalMenu={handleModalMenu}/>
      <Routes>
        <Route path='/*' element={<BodyHome/>}/>
        <Route path='/login' element={<Login usuario={usuario} handleUserLogged={handleUserLogged}/>}/>
        <Route path='/register' element={<CrearCuenta/>}/>
        <Route path='/products/id=:id/:title/*' element={<ProductPage/>}/>
      </Routes>
      <Footer/>
    </div> 
    </userInfoContext.Provider>
    </userContext.Provider>
  );
}

export default App;
