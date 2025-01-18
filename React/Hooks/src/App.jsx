import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  // const [counter, setCounter] = useState(0);
  // const HandleCounterInc = () => {
  //   setCounter(counter + 1);
  // }
  // const HandleCounterDec = () => {
    
  //   let countDec = counter -1;
  //   if(countDec <= 0){
  //     setCounter(0);
  //   }
  //   else{
  //     setCounter(countDec);
  //   }
  // }


  //Async Await method for fect api
  const [myData, setMyData] = useState([]);

  // const fectApi = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //     setMyData(res.data);
  //   } catch (error) {
  //     console.log(error.message);
      
  //   }
  // }

  // useEffect(() => {
  //   fectApi();
  // },[])


  //using axios

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setMyData(res.data))
    .catch((error) => console.log(error.message)
    )
  })
  

  return (
    <>
      {/* <h1>React Hooks</h1>
      <hr />
      <h2>{counter}</h2>
      <button onClick={HandleCounterInc}>+</button>
      <button onClick={HandleCounterDec}>-</button>
      <hr /> */}

      <h1>React Axios</h1>
        {
          myData.slice(0, 10).map((post)=> {
            const {id, title, body} = post;
            return <div className='card' key={id}>
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          })
        }
      
    </>
  )
}

export default App
