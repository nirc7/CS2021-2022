import React, { Component } from 'react'

export default class SyncDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 0
    }
  }

  btnAdd = () => {
    console.log('num before=', this.state.num);
    this.setState((prev) => ({ num: prev.num + 1 }),
      () => console.log('num after state=', this.state.num));
    console.log('num after=', this.state.num);
  }

  render() {

    return (
      <div>
        Sync Demo <br />
        <button onClick={this.btnAdd}>add</button> <br />
        num={this.state.num}


        <ul>
          <a href="#" data-userid={user.id} onClick={()=>this.btnX(7)}>X</a>
          <a href="#" data-userid={7} onClick={this.btnX}>X</a>
        </ul>
      </div>
    )
  }
}
