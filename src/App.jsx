import React from "react"
import Header from "./Components/ChildA/Header/Header.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css'
import ChildA from "./Components/ChildA/ChildA/ChildA.jsx"
import ChildB from "./Components/ChildA/ChildB/ChildB.jsx"
import Notfound from "./Components/ChildA/Notfound/Notfound.jsx"
import './App.css'
const App = () => {
  return (
    <div className="App">
<h1>App</h1>
 
 <BrowserRouter>
 <Header/>
 <Routes>
<Route path="/childa" element ={<ChildA/>}/>
<Route path="/childb" element ={<ChildB/>}/>
<Route path="/*" element ={<Notfound color = 'Orange'/>}/>


 </Routes>
 </BrowserRouter>

    </div>
  )
}

export default App