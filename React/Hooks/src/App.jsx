import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const HandleCounterInc = () => {
    setCounter(counter + 1);
  }
  const HandleCounterDec = () => {
    
    let countDec = counter -1;
    if(countDec <= 0){
      setCounter(0);
    }
    else{
      setCounter(countDec);
    }
  }


  return (
    <>
      <h1>React Hooks</h1>
      <hr />
      <h2>{counter}</h2>
      <button onClick={HandleCounterInc}>+</button>
      <button onClick={HandleCounterDec}>-</button>
      <hr />
    </>
  )
}

export default App
