import logo from './logo.svg';
import './App.css';
import CCPersonsList from './ClassComps/CCPersonsList';
import FCChild from './FCChild';

function App() {

  const getDataFromChild=(data)=>{
    console.log(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <CCPersonsList /> 
       <FCChild send2Papa={getDataFromChild} />       
      </header>
    </div>
  );
}

export default App;
