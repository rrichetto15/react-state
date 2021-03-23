import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.getRandom = this.getRandom.bind(this);
  }

  getRandom(e) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: randomNum });
  }

  render() {
    let sub;

    if (this.state.num !== 7) {
      sub = <button onClick={this.getRandom}>Random Number</button>;
    } else {
      sub = <h3>Winner!</h3>;
    }

    return (
      <div>
        <h1>Number is {this.state.num}</h1>
        {sub}
      </div>
    );
  }
}

export default Clicker;
