
import './App.css';
import react, {useState} from 'react';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import {getdatos} from './/data/datos';
import {getcategorias} from './/data//categorias';

function App() {
  // const [globalState, setglobalState] = useState({});
  // user={globalState.user}
  return (
    <div className="App">
      <AppHeader  />
      <AppBody data={getdatos()}  categorias={getcategorias()}/>
      <AppFooter/>
    </div>
  );
}

export default App;
