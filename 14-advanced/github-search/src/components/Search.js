import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = (props) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const _handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/details/${ username }`);
  }

  return (
    <div>
      <h2>Search GitHub by username</h2>

      <form onSubmit={ _handleSubmit }>

        <label>
          Username:

          <input
            type="search"
            onInput={ (event) => setUsername(event.target.value) }
            required
          />

          <button>Search for { username || '...' }</button>
        </label>

      </form>
    </div>
  );
}

export default Search;
