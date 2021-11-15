import logo from './logo.svg';
import './App.css';
import CCFroms from './CCFroms';
import CCStudent from './CCStudent';
import CCRefs from './CCRefs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCRefs />
        <CCFroms />
        <CCStudent name={8} id={7} />
      </header>
    </div>
  );
}

export default App;
