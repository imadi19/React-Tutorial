import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
let myObj = {
  userName: "Aditya",
  age:21
}
let newArr = [1,2,3,4];
  return (
    <>
    <h1 className = 'bg-green-400 p-4 text-black rounded-2xl flex items-center-safe '>tailwindcss</h1>
<Card channel = "ChaiAurCode " btnText = "click me" newobj = {myObj}/>
<Card channel = "Aditya Sir"/>
    </>
  )
}

export default App
