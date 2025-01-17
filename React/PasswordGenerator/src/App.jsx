import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

  const [length, setlength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-+=~"

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);

    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  }, [length, charAllowed, numAllowed, passwordGenerator])


  return (
    <>
      <h1 className='text-4xl text-center text-white mt-6'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-blue-500 bg-gray-200'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 m-2 mt-3'
            placeholder='Password'
            readOnly 
            ref={passwordRef}/>

            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0 m-2 hover:bg-blue-400'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2 py-3'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={25} value={length} className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1 ml-2'>
              <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput' 
              onChange={()=>{
                setNumAllowed((prev) => !prev);
              }}
              />
              <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 ml-2'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              id='numberInput' 
              onChange={()=>{
                setCharAllowed((prev) => !prev);
              }}
              />
              <label>Charactars</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
