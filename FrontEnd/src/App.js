
import './App.css';
import react, {useState} from 'react';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';

function App() {
  const [globalState, setglobalState] = useState({});
  
  return (
    <div className="App">
      <AppHeader user={globalState.user} />
      <AppBody/>
      <AppFooter/>
    </div>
  );
}

export default App;
