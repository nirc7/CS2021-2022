import logo from './logo.svg';
import './App.css';
import FCFetchDemo from './FCFetchDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FCFetchDemo/>
      </header>
    </div>
  );
}

export default App;
