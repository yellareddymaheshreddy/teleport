import React, { useState, useEffect } from 'react'
import service from '../appwrite/config'
import RideCard from './RideCard'
import { Link } from 'react-router-dom'
const Allrides = () => {
  const [rides, setrides] = useState([])
  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setrides(posts.documents)
      }
    })
  }, [])
  if (rides.length == 0) {
    return (
      <section className='min-h-[40vh] flex justify-center items-center'>
        <div class="mx-4 my-8 p-2 md:px-4 md:py-8 text-center bg-slate-100 md:m-10 rounded-md ">
          <h2 class="text-2xl font-bold tracking-tight text-gray-800 xl:text-4xl">
            Sorry ! NO available Rides Right Now....!
          </h2>
          <p class="mt-4 block max-w-4xl text-gray-500">
            We are searching  to a rides to donate ride and spread our website to all ride doners
          </p>
          <div class="mt-6">
            <Link
              to={"/"}
              class="inline-flex  items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto"
            >

              <span class="mx-2">Home</span>
            </Link>
            <Link
              to={"/add-post"}
              class="mt-4 inline-flex  items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:mx-2 sm:mt-0 sm:w-auto"
            >

              <span class="mx-2">Create Ride</span>
            </Link>
          </div>
        </div>
      </section>

    )
  }

  return (


      <section class="mx-auto  max-w-7xl px-4 py-4">
        <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 class="text-lg font-semibold">All Rides</h2>
            <p class="mt-1 text-sm text-gray-700">
              This is a list of all Rides. You can add new Rides, edit or
              delete existing ones (owner only).
            </p>
          </div>
          <div>
            <button
              type="button"
              class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Create Ride
            </button>
          </div>
        </div>
        <div class="mt-6 flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                <table class=" divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Ride Details</span>
                      </th>
                      <th
                        scope="col"
                        class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Message
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Vechicle
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Date
                      </th><th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        NumberofPassengers
                      </th>
                      <th scope="col" class="relative px-4 py-3.5">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  
                    {rides.map((ride) => (

                      <span key={ride.$id}>
                        <RideCard {...ride} />
                      </span>
                    ))}

                  
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>


  )
}

export default Allrides
