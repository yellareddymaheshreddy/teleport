import React from 'react'
import {  useNavigate } from 'react-router-dom'

const RideCard = ({ From, To, Message, Vechicle, NumberofPassengers, DateofRide, status, Rideid }) => {
  const currentDate = new Date().getFullYear() + "-0" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
  status = DateofRide >= currentDate;
  const navigate = useNavigate();
  return (

    <>

      <td className="whitespace-nowrap px-4 py-4 ">
        <div className="flex items-center cursor-pointer" onClick={() => {
          navigate(`/ride/${Rideid}`)
        }}>
          <div className="h-15 w-15 flex-shrink-0 rounded-full shadow-lg border p-2 min-w-max">
            <img src="./bike.svg" alt="" />

          </div>
          <div className="ml-4 flex flex-col gap-3">
            <div className="text-sm font-medium text-gray-900 flex justify-between">
              <span className="text-gray-500 ">From: &nbsp;</span> {From}
            </div>
            <div className="text-sm font-medium text-gray-700 capitalize flex justify-between min-w-20"><span className="text-gray-500  ">To:&nbsp;</span> {To}</div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 border-x">
        {DateofRide}
        {status ? (<div className="flex justify-center items-center rounded-full bg-green-100 px-4 py-1 text-xs font-semibold leading-5 text-green-800">Active</div>) : (<div className="flex justify-center items-center rounded-full bg-red-100 px-4 py-1 text-xs font-semibold leading-5 text-green-800">Expired</div>)}
      </td>

      <td className="whitespace-nowrap px-4 py-4 ">
        <span className="flex justify-center items-center rounded-full bg-green-100 px-4 py-1 text-xs font-semibold leading-5 text-green-800">
          {Vechicle}
        </span>
      </td>
      <td className="whitespace-nowrap px-4 py-4 border-x">
        <div className="text-sm text-gray-900 font-medium text-wrap">{Message}</div>
        {/* <div className="text-sm text-gray-700">Engineering</div> */}
      </td>
      <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium ">
        <a href="#" className="text-gray-700">
          {NumberofPassengers}
        </a>
      </td>
      {/* </Link> */}

    </>

  )
}

export default RideCard
