import React, { Component } from 'react'

export default class FCInputName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      txtName: null
    }
  }



  btnAddPerson = () => {
    this.props.sendName(this.state.txtName);
  }

  cngTxtName = (e) => {
    this.setState({ txtName: e.target.value });
  }

  render() {
    return (
      <div>
        <button onClick={this.btnAddPerson} > Add Person</button>
        <input type="text" onChange={this.cngTxtName} />
      </div >
    )
  }
}
