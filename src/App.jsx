import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Shop from "./pages/shop"
import Carts from "./pages/carts"


function App() {
  const [count, setCount] = useState(0)

  return (
 <BrowserRouter>
<Routes>
  <Route  path="/" element = {<Home/>} />
  <Route  path="/shop" element = {<Shop/>} />
  <Route  path="/carts" element = {<Carts/>} />
</Routes>
 </BrowserRouter>
  );
}

export default App
