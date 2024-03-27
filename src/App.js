import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className='area'>
      <div className='wrapper'>
        <div className='number'>{count}</div>
        <button className='btn-push' onClick={increase}>
          증가
        </button>
      </div>
    </div>
  );
}

export default App;
