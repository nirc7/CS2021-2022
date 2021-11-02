import './App.css';
import EHeader from './Elemetns/EHeader';
import FCPerson from './FunctionalComp/FCPerson';
import CCHello from './ClassComp/CCHello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <CCHello />
        <FCPerson id={7} name={"avi"}/>
        <FCPerson id={8} name={"ben"}/>
      </header>
    </div>
  );
}

export default App;
