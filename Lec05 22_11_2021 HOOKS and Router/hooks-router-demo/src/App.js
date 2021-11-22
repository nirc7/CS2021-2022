import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FCPersonsList from './FuncComps/FCPersonsList';
import FCInputName from './FuncComps/FCInputName';

const listPersons = [{ id: 1, name: 'avi' }, { id: 2, name: 'bennet' }, { id: 3, name: 'charlie' }];

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: listPersons,
      count: listPersons.length
    }
  }

  getName = (name) => {
    console.log('App=', name);
    let newCount = this.state.count + 1;
    let newPersons = [...this.state.persons, { id: newCount, name }];

    this.setState({
      persons: newPersons,
      count: newCount
    });
  }

  peronsId2Delete = (pId) => {
    let newPersons = this.state.persons.filter(per => per.id !== pId);
    this.setState({ persons: newPersons });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FCInputName sendName={this.getName} />
          <FCPersonsList sendID={this.peronsId2Delete} persons={this.state.persons} />
        </header>
      </div>
    );
  }
}
