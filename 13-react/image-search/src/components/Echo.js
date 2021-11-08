import React, { Component } from 'react';

class Echo extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
    this._updateMessage = this._updateMessage.bind(this);
    this._clearMessage = this._clearMessage.bind(this);

  }

  _updateMessage(event) {
    this.setState({ message: event.target.value });
  }

  _clearMessage() {
    this.setState({ message: '' });
  }

  render() {
    return (
      <div>
        <p>{ this.state.message || 'user message here' }</p>
        <input onChange={ this._updateMessage } placeholder="user input goes here" value={ this.state.message } />
        <button onClick={ this._clearMessage }>
          Clear message
        </button>
      </div>
    );
  }
}

export default Echo;
