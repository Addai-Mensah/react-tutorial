import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
  <Home/>
 </div>
  )
}

export default App