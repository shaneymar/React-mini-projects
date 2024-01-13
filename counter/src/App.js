import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>{counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1 )}>-</button>
      <button onClick={() => setCounter( 0 )}>Reset</button>
    </div>
  );
}

export default App;
