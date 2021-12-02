import { Link } from 'react-router-dom';
import _ from 'underscore';

const Home = (props) => {
  const getRandomUser = () => {
    const students = ['Schultzy9', 'EhsanAlimo', 'ivanveselinov', 'Meraki-Destric', 'StephenSant', 'sarahjune85', 'deanmsw', 'cheddachedda', 'tracey-web', 'agpoulsen', 'gouthamgo', 'MJ5141', 'alekskuzmin', 'derekw26', 'jzwermut', 'Keith-hoka', 'dcc7', 'bernardomar', 'angepol', 'Just-Kundai', 'appaluza'];

    return _(students).sample();
  }

  return (
    <div>
      <h1>GitHub Search</h1>

      <Link to='/search'>
        Search for a user
      </Link>

      { " | " }

      <Link to={`/details/${ getRandomUser() }`}>
        Random User
      </Link>

    </div>
  );
}

export default Home;
