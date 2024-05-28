import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CartContext } from './context/CartContext'

function App() {
  const [count, setCount] = useState(0);
 
  return (
  
  
  
  
  <CartContext>
    <h1>Navbar</h1>
    <h2>Lista De Productos</h2>
  </CartContext>

  

  
  )
}

export default App
