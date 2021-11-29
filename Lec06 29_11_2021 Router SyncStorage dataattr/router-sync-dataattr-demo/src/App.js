import logo from './logo.svg';
import './App.css';
import SyncDemo from './ClassComps/SyncDemo';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import EHeader from './Components/EHeader';
import MenuUser from './Components/MenuUser';
import SecondPage from './Components/SecondPage';

function App() {
  return (
    <div className="App">
      {EHeader}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu/:userId" element={<MenuUser/> }/>
          <Route path="/secondP" element={<SecondPage />} />
        </Routes>
        <SyncDemo />
      </header>
    </div>
  );
}

export default App;
