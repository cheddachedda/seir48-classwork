import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      height: 100 // initial value
    };

    this._zoomIn = this._zoomIn.bind(this);
    this._zoomOut = this._zoomOut.bind(this);
  }

  _zoomIn() {
    this.setState({ height: this.state.height + 10 });
  }

  _zoomOut() {
    this.setState({ height: this.state.height - 10 });
  }

  render() {
    const { name, age, motto, pic } = this.props;
    return (
      <div>
        <h2>{ name }</h2>
        <h3>Age: { age }</h3>
        <p>{ motto }</p>

        <div>
          <button onClick={ this._zoomIn }> + </button>
          <button onClick={ this._zoomOut }> - </button>
          <img src={ pic } alt={ name } height={ this.state.height } />
        </div>
      </div>
    );
  }
}

export default Profile;
