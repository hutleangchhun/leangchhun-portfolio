import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <p className='text-green-600 text-4xl font-medium'>Nice To Meet You!</p>
      </div>
    </>
  )
}

export default App
