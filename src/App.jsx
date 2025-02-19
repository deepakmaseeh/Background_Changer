import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow")

  return (
  
      <div className='w-full h-screen duration-150' 
      style={{backgroundColor:color}} > 
      
      
      <div className='fixed flex flex-wrap bottom-14 justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl '>
          <button 
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"red"}}
          >Red</button>
          <button 
          onClick={() => setColor("Green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"Green"}}
          >Green</button>
          <button 
          onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button 
          onClick={() => setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"pink"}}
          >Pink</button>
          <button 
          onClick={() => setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"Black"}}
          >Black</button>
          <button 
          onClick={() => setColor("Olive")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"olive"}}
          >Olive</button>
          <button 
          onClick={() => setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"purple"}}
          >Purble</button>
          <button 
          onClick={() => setColor("gray")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          style={{backgroundColor:"gray"}}
          >Gray</button>
          <button 
          onClick={() => setColor("white")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
          style={{backgroundColor:"white"}}
          >White</button>
          <button 
          onClick={() => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          
        </div>
      </div>
      </div>
       

  )
}

export default App
