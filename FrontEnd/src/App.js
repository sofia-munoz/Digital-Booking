
import './App.css';
import react, {useState} from 'react';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import {getdatos} from './/data/datos';

function App() {
  // const [globalState, setglobalState] = useState({});
  // user={globalState.user}
  return (
    <div className="App">
      <AppHeader  />
      <AppBody data={getdatos()}/>
      <AppFooter/>
    </div>
  );
}

export default App;
