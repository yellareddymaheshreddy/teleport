import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Navbar,Loading } from './components'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { setrides } from './store/ridesSlice'
import service from './appwrite/config'



function App() {
  const [deferredPrompt, setdefferedPrompt] = useState({})
  window.addEventListener('beforeinstallprompt', (e) => {
      setdefferedPrompt = e;
  });
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
          service.getPosts().then((rides) => {
            if (rides) {
            dispatch(setrides(rides.documents))
            }
          })
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

        <Navbar deferredPrompt={deferredPrompt}/>
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>
      <Loading/>
    </div>
  )
}

export default App