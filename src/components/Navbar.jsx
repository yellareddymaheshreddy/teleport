import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex min-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 min-h-24">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img src="/favicon.svg" alt="" height={40} width={40} />
          </span>
          <span className="font-bold text-xl">Teleport</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `text-sm font-semibold  hover:text-gray-900 ${isActive ? "text-red-500" : "text-gray-800"}`}
              // className="text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                // className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                className={({ isActive }) => `text-sm font-semibold  hover:text-gray-900 ${isActive ? "text-red-500" : "text-gray-800"}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                // className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                className={({ isActive }) => `text-sm font-semibold  hover:text-gray-900 ${isActive ? "text-red-500" : "text-gray-800"}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Install
          </button>
          {authStatus && <LogoutBtn />}
          {!authStatus && <span> <button
            onClick={() => navigate("/login")}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-3"
          >
            Login
          </button><button
            onClick={() => navigate("/signup")}
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
              Sign Up
            </button></span>}
        </div>
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 cursor-pointer"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>

  )
}

export default Navbar
