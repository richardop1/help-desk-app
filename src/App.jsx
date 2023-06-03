import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
 //  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/dashboard' element={<>Dashboard</>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
