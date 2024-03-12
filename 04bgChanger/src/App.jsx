import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      
      <button 
      onClick={()=> setColor('red')}
      className='outline-none px-4 py-1 rounded-full text-black'
      style={{backgroundColor:'red'}}
      >Red</button>{" "}
      <button 
      onClick={()=> setColor('green')}
      className='outline-none px-4 py-1 rounded-full text-black'
      style={{backgroundColor:'green'}}
      >Green</button>{" "}
      <button 
      onClick={()=> setColor('blue')}
      className='outline-none px-4 py-1 rounded-full text-black'
      style={{backgroundColor:'blue'}}
      >Blue</button>
    </div>
  )
}

export default App
