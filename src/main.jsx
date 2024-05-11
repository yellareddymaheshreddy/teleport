import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landingpage from './components/Landingpage.jsx'
import ErrorPage from "./error-page";
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import store from './store/store.js'
import AuthLayout from './components/AuthLayout.jsx'
import Login from './components/Login.jsx'
import Signup from './components/signup.jsx'
import Home from './components/Home.jsx'
import Post from './components/Post.jsx'
import Allrides from './components/Allrides.jsx'
import EditRide from './components/EditRide.jsx'
const router = createBrowserRouter([{
  path: "/",
  element: <AuthLayout authentication={false}><App /></AuthLayout>,
  errorElement: <><Navbar />
  
    <ErrorPage />
    <Footer />
  </>,

  children: [
    {
      path: "",
      element: <AuthLayout authentication><Landingpage />
      <Home/></AuthLayout>,
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "/login",
      element: (
        <AuthLayout authentication={false}>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: "/signup",
      element: (
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      ),
      
    },
    {
      path: "/all-posts",
      element: (
          <AuthLayout authentication>
              {" "}
              <Allrides/>
          </AuthLayout>
      ),
  },
  {
    path: "/post/:slug",
    element: <Post />,
},
{
  path: "/edit-post/:slug",
  element: (
      <AuthLayout authentication>
          {" "}
          <EditRide />
      </AuthLayout>
  ),
},
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
