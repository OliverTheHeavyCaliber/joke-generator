import { useEffect, useState } from 'react';
import './App.css';
import Button from './Button';
import Joke from './Joke';

function App() {
  const [joke, setJoke] = useState(null);
  const url = "https://v2.jokeapi.dev/joke/Any";

  async function fetchData() {
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result);
    setJoke(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!joke) {
    return <></>;
  }

  return (
    <div className="App">
      <Joke joke={joke} />
      <Button fetchData={fetchData} />
    </div>
  );
}

export default App;
