import React, { Component } from 'react';

class Clickr extends Component {
  constructor() {
    super(); // You must call super().
    this.state = {
      clicks: 0
    };

    // Event handlers need to be bound (for extremely borign techincal reasons)
    this._incrementCount = this._incrementCount.bind(this); // WTF? You need this, trust me.
  }

  // Event handelrs start with an _ (by convention)
  _incrementCount() {
    this.setState({ clicks: this.state.clicks + 1 }); // no mutation
  }

  render() {
    console.log('rendering...');;
    return (
      <button onClick={ this._incrementCount }>
        { this.state.clicks } click so far
      </button>
    );
  }
}

export default Clickr;
