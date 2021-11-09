import { Component } from 'react';

class SecretForm extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({ content: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.content);
  }

  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } value={ this.state.content } />
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

export default SecretForm;
