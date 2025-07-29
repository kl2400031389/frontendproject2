import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>welcome to our kl university</h1>
    <h2>k.venkateswara reddy</h2>
    <h3>in our university many places are there to visit</h3>
    <Link to="/Page1">go to page1</Link>
    <br></br>
    <Link to="/Page2">go to page2</Link>
    <Link to="/Page3">go to page3</Link>
    

    </>
  )
}

export default App
