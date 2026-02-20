import React from 'react'
import { useState } from 'react'
//here title is read only value inside usestate its more like first(Title) is read and second(settitle) one is the write only value
const App = () => {
  const [Title, setTitle] = useState('')
  console.log("here  Title value",{Title});
  
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log("here we submit the form",e,e.target.value);
        
      }}>
      <input value={Title} onChange={(e)=>{console.log("here the value we write",e.target.value)
        setTitle(e.target.value)}} type="text"  placeholder='Enter your name' />
      <button>Submit</button>
      </form>

    </div>
  )
}

export default App