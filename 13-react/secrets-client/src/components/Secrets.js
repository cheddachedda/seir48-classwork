import { Component } from 'react';
import axios from 'axios';

import SecretForm from './SecretForm';
import SecretsList from './SecretsList';

const SERVER_URL = 'http://localhost:3000/secrets.json';

class Secrets extends Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = {
      // TODO: replace this via AJAX from the secrets server
      secrets: []
    };

    this.saveSecret = this.saveSecret.bind(this);
  }

  // Put AJAX here
  componentDidMount() {
    console.log('component did mount');

    const fetchSecrets = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({ secrets: response.data });
        setTimeout(fetchSecrets, 5000); // a form of recursion
      });
    };

    fetchSecrets();
  }

  saveSecret(content) {
    axios.post(SERVER_URL, { content }).then((response) => {
      this.setState({
        secrets: [ ...this.state.secrets, response.data ]
      });
    });
  }

  render() {
    console.log('render');
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
