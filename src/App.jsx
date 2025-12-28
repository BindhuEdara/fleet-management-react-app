import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './components/Admin';
import LoginPage from './components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/Admin' element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
