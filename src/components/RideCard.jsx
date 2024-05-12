import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

const RideCard = ({ $id, From, To, Message, Vechicle, NumberofPassengers, DateofRide }) => {
  return (
    <Link to={`/post/${$id}`}>
      <tbody class="divide-y divide-gray-200 bg-white">
        <tr className='w-full'>
          <td class="whitespace-nowrap px-4 py-4">
            <div class="flex items-center">
              <div class="h-10 w-10 flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  src="/favicon.svg"
                  alt=""
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  From: {From}
                </div>
                <div class="text-sm text-gray-700">To: {To}</div>
              </div>
            </div>
          </td>
          <td class="whitespace-nowrap px-12 py-4">
            <div class="text-sm text-gray-900 ">{Message}</div>
            <div class="text-sm text-gray-700">Engineering</div>
          </td>
          <td class="whitespace-nowrap px-4 py-4">
            <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
              {Vechicle}
            </span>
          </td>
          <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
            {DateofRide}
          </td>
          <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
            <a href="#" class="text-gray-700">
              {NumberofPassengers}
            </a>
          </td>
        </tr>

        </tbody>
    </Link>
  )
}

export default RideCard
