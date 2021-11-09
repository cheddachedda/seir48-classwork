import { Component } from 'react';
import SecretForm from './SecretForm';
import SecretsList from './SecretsList';

class Secrets extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: replace this via AJAX from the secrets server
      secrets: [
        { id: 1, content: 'secret a' },
        { id: 2, content: 'secret 2' },
        { id: 3, content: 'secret iii' },
      ]
    };

    this.saveSecret = this.saveSecret.bind(this);
  }

  saveSecret(content) {
    const secret = {
      id: this.state.secrets.length + 1,
      content: content
    };

    const secrets = this.state.secrets.slice(); // copy the original state
    secrets.push(secret);

    this.setState({ secrets });
  }

  render() {
    return (
      <div>
        <h1>Tell us all your secrets</h1>
        <SecretForm onSubmit={ this.saveSecret } />
        <SecretsList secrets={ this.state.secrets } />
      </div>
    );
  }
}

export default Secrets;
