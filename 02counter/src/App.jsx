import { useState } from 'react'

import './App.css'

function App() {
  //let count=5
  const [count,setCount]= useState(0)               //count is variable, setCount is method 

  const addValue = () =>{
    setCount(count + 1)
 
    // this is a batch which add + 3 every single tym 
    // setCount((count)=> count+1)
    // setCount((count)=> count+1)
    // setCount((count)=> count+1)
  }

  const subValue = () =>{
    if(count>0)
      setCount(count - 1)
  }

  return (
    <>
      <h1>This is Counter Project {count}</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value</button> {}
      <button onClick={subValue}>Sub Value</button>   
      <p>footer: {count}</p>
    </>
  )
}

export default App
