import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout, setdeffer } from "./store/authSlice"
import { Footer, Navbar,Loading } from './components'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { setrides } from './store/ridesSlice'
import service from './appwrite/config'



function App() {
  
  const [loading, setLoading] = useState(true)
  const [prompt, setprompt] = useState(null)
  const dispatch = useDispatch()
  
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
        setprompt(e);
    });

    
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
  const install= async () => {
    if (prompt !== null) {
        prompt.prompt();
        const { outcome } = await prompt.userChoice;
        if (outcome === 'accepted') {
            setprompt(null)
        }
    }
}

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between' >
      
      <ToastContainer />
      <div className='w-full block'>

        <Navbar install={install}/>
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