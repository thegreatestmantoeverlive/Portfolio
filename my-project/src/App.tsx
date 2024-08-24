import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo  from '/vite.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Header from './components/Header'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen'>
        <Header /> 
      </div>
    </>
  )
}

export default App
