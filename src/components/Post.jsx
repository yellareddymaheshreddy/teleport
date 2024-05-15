import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { notifysuccess } from "./toast";
import { deleteride } from "../store/ridesSlice";


export default function Post() {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const { slug } = useParams();
    const allrides = useSelector(state => state.rides.rides)
    const [ride, setPost] = useState({});
    let isAuthor = ride && userData ? ride.Createdby === userData.$id : false;
    useEffect(() => {

        allrides.map((ride) => {
            if (ride.Rideid == slug) {
                setPost(ride);
            }
        })

    }, [slug, navigate, allrides, isAuthor])

    const dispatch = useDispatch();

    const deletePost = () => {
        notifysuccess("deletion sucessfull!")
        dispatch(deleteride(ride.$id))
        appwriteService.deletePost(ride.$id)
        navigate("/")

    }


    return ride ? (
        <div className="mx-3 md:mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-4 sm:p-10 sm:px-16 shadow-lg rounded-lg border">
            <h2 className="text-3xl font-bold">Ride Details:</h2>
            <div className="space-y-1 flex">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    Rider Message:&nbsp;
                </h3>
                <p className="mt-3 text-sm font-medium text-gray-700">{ride.Message}</p>
            </div>
            <ul className="flex flex-col divide-y divide-gray-200">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <div className="flex-shrink-0 rounded-full shadow-lg border p-3" style={{ height: "60px", width: "60px" }}>
                            <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex w-full flex-col justify-between pb-4">
                            <div className="flex w-full justify-between space-x-2 pb-2">
                                <div className="space-y-1 flex">
                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8 text-gray-600">
                                        From:&nbsp;
                                    </h3>
                                    <p className="text-sm font-medium">{ride.From}</p>
                                </div>

                            </div>
                            <div className="flex w-full justify-between space-x-2 pb-2">
                                <div className="space-y-1 flex">
                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8 text-gray-600">
                                        To:&nbsp;
                                    </h3>
                                    <p className="text-sm font-medium">{ride.To}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </li>
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    {/* <div className="flex w-full space-x-2 sm:space-x-4"> */}

                    <div className="flex w-full flex-col justify-between pb-4">
                        <div className="flex w-full justify-between space-x-2 pb-2">
                            <div className="space-y-1 flex">
                                <h3 className=" font-semibold leading-snug sm:pr-8 text-gray-600">
                                    Number of Passengers : &nbsp;
                                </h3>
                                <p className="text-sm font-medium">{ride.NumberofPassengers}</p>
                            </div>

                        </div>
                        <div className="flex w-full justify-between space-x-2 pb-2">
                            <div className="space-y-1">
                                <h3 className=" font-semibold leading-snug sm:pr-8 text-gray-600">
                                    Date of Ride  :&nbsp;
                                </h3>
                                <p className="text-sm font-medium">{ride.DateofRide}</p>

                            </div>
                            <div className="space-y-1 flex justify-center items-center">

                                <h3 className=" font-semibold leading-snug sm:pr-8">
                                    Vechicle:&nbsp;
                                </h3>
                                <span className="flex justify-center items-center rounded-full bg-green-100 px-4 py-1 text-xs font-semibold leading-5 text-green-800">
                                    {ride.Vechicle}
                                </span>
                            </div>
                            {/* </div> */}

                        </div>

                    </div>
                </li>
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">

                        <div className="flex w-full flex-col justify-between pb-4">
                            <div className="flex w-full justify-between space-x-2 pb-2">
                                <div className="space-y-1 flex">
                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8 mb-6">
                                        Rider Contact Details:&nbsp;
                                    </h3>
                                </div>


                            </div>
                            <div className="flex w-full flex-col justify-between pb-4">
                            <div className="flex w-full justify-between space-x-2 pb-2">
                                    <div className="space-y-1 flex">
                                        <h3 className="font-semibold leading-snug sm:pr-8 text-gray-700">
                                            Rider Name:&nbsp;
                                        </h3>
                                        <p className="text-sm font-semibold capitalize">{ride.Ridername}</p>
                                    </div>

                                </div>
                                <div className="flex w-full justify-between space-x-2 pb-2">
                                    <div className="space-y-1 flex">
                                        <h3 className="font-semibold leading-snug sm:pr-8 text-gray-700">
                                            Phone No:&nbsp;
                                        </h3>
                                        <p className="text-sm font-semibold">{ride.Riderphone}</p>
                                    </div>

                                </div>
                                <div className="flex w-full justify-between space-x-2 pb-2">
                                    <div className="space-y-1 flex">
                                        <h3 className=" font-semibold leading-snug sm:pr-8 text-gray-700">
                                            Email id:&nbsp;
                                        </h3>
                                        <p className="text-sm font-semibold">{ride.Rideremail}</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className="flex justify-center items-center">
                            <Link to={`tel:${ride.Riderphone}`}>
                                <button
                                    type="button"
                                    className="min-w-max rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Call Rider
                                </button>
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>


            {isAuthor && (
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={() => {
                            // navigate(`/edit-ride/${ride.$id}`)
                            navigate(`/edit-ride/${ride.Rideid}`)
                        }}
                        type="button"
                        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-green-50"
                    >
                        Edit
                    </button>
                    <button
                        onClick={deletePost}
                        type="button"
                        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black bg-red-50"
                    >
                        Delete
                    </button>
                </div>
            )}


        </div>

    ) : null;
}