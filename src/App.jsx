import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Navbar } from './components'
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading'
import { ToastContainer } from 'react-toastify'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {

    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between' >
      
      <ToastContainer />
      <div className='w-full block'>

        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  )
}

export default App