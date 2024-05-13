import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel';
import { Link } from 'react-router-dom';



const Landingpage = () => {

    const navigate = useNavigate();
    const images = ["rideshare1.png", "rideshare2.png"];
    return (
        <div className="w-full">


            <div className="relative w-full bg-white">
                <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                        <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
                            <div className="rounded-full bg-white p-1 px-2">
                                <p className="text-sm font-medium">We&#x27; hiring</p>
                            </div>
                            <p className="text-sm font-medium">Join our team →</p>
                        </div>
                        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                            People who care about your growth
                        </h1>
                        <p className="mt-8 text-lg text-gray-700">
                            Service to others is the rent you pay for your room here on earth.
                        </p>
                        <div className="my-8 flex items-center justify-center gap-6 space-x-2">
                            <div className='flex gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" height="50px" width="50px" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="5.5" cy="17.5" r="3.5"></circle> <circle cx="18.5" cy="17.5" r="3.5"></circle> <path d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2"></path> </g></svg>

                                <button
                                    onClick={() => {
                                        navigate("/add-post")
                                    }}
                                    type="button"
                                    className="rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Donate Ride
                                </button>

                            </div>

                            <div className='flex gap-2'>
                                <svg fill="#161313" height="50px" width="50px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="79 -152 413.5 561" xmlSpace="preserve" stroke="#161313"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M230.4-103.3c0-25.5,20.7-46.2,46.2-46.2c25.5,0,46.2,20.7,46.2,46.2c0,25.5-20.7,46.2-46.2,46.2 C251.1-57.1,230.4-77.8,230.4-103.3z M467.8,169.1h-20.1v157.2h20.1c14.4,0,21.7-11.3,21.7-21.6c0,0,0-113.3,0-114 C489.4,180.5,481.3,169.1,467.8,169.1z M407.2,169h29.5v157.2H332v54.1c0,36.2-53.2,35.1-53.2,0V169.1h-8.8v211.1 c0,35.1-52.8,36.2-52.8,0V13.5L92.5-113.4c-21.5-21.5,9.9-52.9,31.4-31.3L221.4-45l102.5-0.1c32.1,0,56.2,29.8,56.2,58.1v122.2 c8.6,0,13.7,0,13.7,0c8.6,0,13.5,4.2,13.5,12.3V169z M341.4,27.4H332V169h9.4v-21.3v-0.2V27.4z M394.2,147.8h-40.3v21.3h40.3V147.8z "></path> </g></svg>
                                <button
                                    onClick={() => {
                                        navigate("/all-posts");
                                    }}
                                    type="button"
                                    className="rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Get Ride
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden relative lg:col-span-5 lg:block lg:-mr-8 xl:col-span-6">
                        <Carousel image={images[1]} />
                    </div>
                </div>
            </div>
            <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                            <svg
                                className="h-9 w-9 text-blue-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Make Friends</h3>
                        <p className="mt-4 text-sm text-gray-600">
                            You can make new friends using our website by sharing your ride with strangers and traveling with them.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                            <svg
                                className="h-9 w-9 text-orange-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">
                            Help Others &amp; Stay Happy
                        </h3>
                        <p className="mt-4 text-sm text-gray-600">
                            You can publish your ride in here and get the travel partners with you.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                            <svg
                                className="h-9 w-9 text-green-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">
                            Free &amp; Polution Friendly
                        </h3>
                        <p className="mt-4 text-sm text-gray-600">
                            By using our website indirectly you are saving petrol and making being the part of making polution free environment
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                            <svg
                                className="h-9 w-9 text-red-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">Explore the world </h3>
                        <p className="mt-4 text-sm text-gray-600">
                            You can explore the real world with the real people who are completly strangers before.
                        </p>
                    </div>
                </div>
            </div>
            <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
                <div>
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                            If you dont find answer for your question , Feel free to contact us directly using contact us tab!
                        </p>
                    </div>
                    <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16 ">
                        
                    <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-1000">
                            <span 
                            onClick={(e)=>{
                                console.log("object")
                                const element=e.currentTarget.querySelector("#m")
                                if(element.classList.contains("hidden")){
                                    element.classList.remove("opacity-0","hidden")
                                    
                                    e.currentTarget.querySelector("polyline").attributes.points.value="18 15 12 9 6 15"
                                }else{
                                    element.classList.add("opacity-0","hidden")
                                    e.currentTarget.querySelector("polyline").attributes.points.value="6 9 12 15 18 9"
                                }
                            }}
                            >

                            <button
                                
                                type="button"
                                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                                >
                                <span className="flex text-lg font-semibold text-black">
                                    What is the use of this website?
                                </span>
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
                                    className="h-5 w-5 text-gray-500"
                                    >
                                    <polyline points="6 9 12 15 18 9" id='polyline'></polyline>
                                </svg>
                            </button>
                            <div className="px-4 pb-5 sm:px-6 sm:pb-6 ">
                                <p className="text-gray-500 hidden" id='m'>
                                    This website is designed to deliver rides from the riders who are willing to help others by allowing others to travel through them when the space in their vechicle is available
                                </p>
                            </div>
                                    </span>
                        </div><div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-1000">
                            <span 
                            onClick={(e)=>{
                                console.log("object")
                                const element=e.currentTarget.querySelector("#m")
                                if(element.classList.contains("hidden")){
                                    element.classList.remove("opacity-0","hidden")
                                    
                                    e.currentTarget.querySelector("polyline").attributes.points.value="18 15 12 9 6 15"
                                }else{
                                    element.classList.add("opacity-0","hidden")
                                    e.currentTarget.querySelector("polyline").attributes.points.value="6 9 12 15 18 9"
                                }
                            }}
                            >

                            <button
                                
                                type="button"
                                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                                >
                                <span className="flex text-lg font-semibold text-black">
                                    How to get free ride ?
                                </span>
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
                                    className="h-5 w-5 text-gray-500"
                                    >
                                    <polyline points="6 9 12 15 18 9" id='polyline'></polyline>
                                </svg>
                            </button>
                            <div className="px-4 pb-5 sm:px-6 sm:pb-6 ">
                                <p className="text-gray-500 hidden" id='m'>
                                    Go to home page and click on Get ride and select any one of the ride and contact the rider using his contact details
                                </p>
                            </div>
                                    </span>
                        </div><div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-1000">
                            <span 
                            onClick={(e)=>{
                                console.log("object")
                                const element=e.currentTarget.querySelector("#m")
                                if(element.classList.contains("hidden")){
                                    element.classList.remove("opacity-0","hidden")
                                    
                                    e.currentTarget.querySelector("polyline").attributes.points.value="18 15 12 9 6 15"
                                }else{
                                    element.classList.add("opacity-0","hidden")
                                    e.currentTarget.querySelector("polyline").attributes.points.value="6 9 12 15 18 9"
                                }
                            }}
                            >

                            <button
                                
                                type="button"
                                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                                >
                                <span className="flex text-lg font-semibold text-black">
                                    How to share our ride ?
                                </span>
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
                                    className="h-5 w-5 text-gray-500"
                                    >
                                    <polyline points="6 9 12 15 18 9" id='polyline'></polyline>
                                </svg>
                            </button>
                            <div className="px-4 pb-5 sm:px-6 sm:pb-6 ">
                                <p className="text-gray-500 hidden" id='m'>
                                    You can share your ride by going to Donate ride section in the home page and create ride
                                </p>
                            </div>
                                    </span>
                        </div>
                    </div>
                    <p className="textbase mt-6 text-center text-gray-600">
                        Can&#x27;t find what you&#x27;re looking for?{" "}
                        <Link to="/contact" title="" className="font-semibold text-black hover:underline">
                            Contact our support
                        </Link>
                    </p>
                </div>
            </section>


        </div>

    )
}

export default Landingpage
