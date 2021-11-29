import logo from './logo.svg';
import './App.css';
import SyncDemo from './ClassComps/SyncDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SyncDemo />
      </header>
    </div>
  );
}

export default App;
