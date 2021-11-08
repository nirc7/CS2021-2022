import React, { Component, } from 'react';

const personsList = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'charlie' }];

export default class CCPersonsList extends Component {
  constructor(props) {
    super(props);

    this.state =
    {
      pList: personsList,
      counter: personsList.length
    };
  }

  chgTxt = (e) => {
    console.log(e.target.value);
    this.setState({ inputTxtName: e.target.value });
  }

  btnAddPerson = () => {
    let newPlist = [...this.state.pList, { id: this.state.counter + 1, name: this.state.inputTxtName }];
    this.setState((prev) => ({
      pList: newPlist,
      counter: prev.counter + 1
    }));
  }

  deletePerson = (perId) => {
    let newPlist = this.state.pList.filter((per) => per.id !== perId);
    this.setState({ pList: newPlist });
  }

  render() {
    let pListAsStr = this.state.pList.map((per) =>
      <li
        key={per.id}
        className="list-group-item"
        style={{ fontSize: 25, color: 'purple' }}
      >id={per.id} name={per.name}
        <svg xmlns="http://www.w3.org/2000/svg"
          width="25"
          style={{ color: 'red' }} height="25" fill="currentColor" className="bi bi-person-dash" viewBox="-1 2 15 15"
          onClick={() => { this.deletePerson(per.id) }}
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          <path fillRule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
        </svg>
      </li>);

    return (
      <div>
        <input type="text" style={{ margin: 15 }}
          onChange={this.chgTxt} /> <br />
        <button
          className="btn btn-success"
          style={{ fontSize: 25 }}
          onClick={this.btnAddPerson}>Add Person</button>
        <div>Persons List:</div>
        <ul style={{ margin: 15 }} className="list-group">
          {pListAsStr}
        </ul>
      </div>
    );
  }
}