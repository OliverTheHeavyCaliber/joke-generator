import { useEffect, useState } from "react";

function Joke({joke}) {
  //create a state 
  const [delivery, setDelivery] = useState('');

  // setTimeout is called from useEffect and depends on the joke change
  useEffect(() => {
    setDelivery('');
    if (joke.type === 'twopart') {
      setTimeout(() => {
        setDelivery(joke.delivery);
      }, 3000);
    }
  }, [joke]);

  return (
    <div>
      {joke.type === 'single' ? 
        <h2>{joke.joke}</h2>  : 
        <>
          <h2>{joke.setup}</h2> 
          <h3>{delivery}</h3>
        </>
    }
    </div>
  )
}

export default Joke;