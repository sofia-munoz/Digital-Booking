
import './App.css';
import react, {useState} from 'react';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import {getdatos} from './/data/datos';



function App() {
  const [globalState, setglobalState] = useState({});
  
  return (
    <div className="App">
      <AppHeader user={globalState.user} />
      <AppBody data={getdatos()}/>
      <AppFooter/>
    </div>
  );
}

export default App;
