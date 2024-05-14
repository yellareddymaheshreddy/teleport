import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Navbar,Footer,Contact,LandingPage,About,AuthLayout,Login,Signup,Post,Allrides,EditRide,CreateRide} from './components'

import ErrorPage from "./error-page";
import store from './store/store.js'

const router = createBrowserRouter([{
  path: "/",
  element: 
    <App />,
  errorElement: <><Navbar />
    <ErrorPage />
    <Footer />
  </>,

  children: [
    {
      path: "",
      element: <AuthLayout authentication><LandingPage />
      </AuthLayout>,
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
      // <AuthLayout authentication>
          // {" "}
          <EditRide />
      // </AuthLayout>
  ),
},
{
  path: "/add-post",
  element: (
      <AuthLayout authentication>
          {" "}
          <CreateRide />
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
