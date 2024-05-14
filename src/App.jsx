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
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = e;
      console.log("catched event")
  });

  // const installApp = document.getElementById('installApp');
  // installApp.addEventListener('click', async () => {
  //     if (deferredPrompt !== null) {
  //         deferredPrompt.prompt();
  //         const { outcome } = await deferredPrompt.userChoice;
  //         if (outcome === 'accepted') {
  //             deferredPrompt = null;
  //         }
  //     }
  // });
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

        <Navbar />
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