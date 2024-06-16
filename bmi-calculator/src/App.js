import React, { useMemo, useState } from 'react'
import './App.css'

const App = () => {

  const [weight, setWeight] = useState(70)
  const [height, setHeight] =useState(180)

  const handleweightChage = (event) =>{
    setWeight(event.target.value)
  }
  const handleHeightChage = (event) =>{
    setHeight(event.target.value)
  }

  const output = useMemo(()=>{
    const calculateHight = height /100;

    return (weight/ (calculateHight*calculateHight)).toFixed(1)

  },[weight,height])



  return (
    <main>
        <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} kg</p>
        <input className='input-slider' 
        type='range' 
        min='40' 
        max='200' 
        step='1'
        onChange={handleweightChage}
        />
        <p className='slider-output'>Height: {height} cm</p>
        <input className='input-slider' 
        type='range' 
        min='160' 
        max='200' 
        onChange={handleHeightChage}
        />
      </div>
      <div className='output-section'>
        <p>Your BMI IS</p>
        <p className='output'>{output}</p>
      </div>
       
    </main>
  )
}

export default App