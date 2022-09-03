import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home'
import Shop from "./pages/shop"
import Carts from "./pages/carts"
import Login from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
 <BrowserRouter>
<Routes>
  <Route  path="/" element = {<Home/>} />
  <Route  path="/shop" element = {<Shop/>} />
  <Route  path="/carts" element = {<Carts/>} />
  <Route  path="/login" element = {<Login/>} />
</Routes>
 </BrowserRouter>
  );
}

export default App
