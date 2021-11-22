import axios from 'axios';
import { useState, useEffect } from 'react';

const NumberFact = () => {
  const [fact, setFact] = useState('Loading...');

  useEffect(() => {
    axios.get('http://numbersapi.com/random/trivia').then((response) => {
      setFact(response.data);
    });
  }, []); // empty array means "run this function only once"

  return (
    <p>{ fact }</p>
  );
};

export default NumberFact;
