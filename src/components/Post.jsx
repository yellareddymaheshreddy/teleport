import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
import { notifysuccess } from "./toast";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.Createdby === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then(() => {
            notifysuccess("deletion successfull!")
            navigate("/");

        });
    };

    return post ? (
        <div class="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
            <h2 class="text-3xl font-bold">Ride Details:</h2>
            <div class="space-y-1 flex">
                <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                    Message:
                </h3>
                <p class="mt-3 text-sm font-medium text-gray-700">{post.Message}</p>
            </div>
            <ul class="flex flex-col divide-y divide-gray-200">
                <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div class="flex w-full space-x-2 sm:space-x-4">
                        <img
                            class="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png"
                            alt="Nike Air Force 1 07 LV8"
                        />
                        <div class="flex w-full flex-col justify-between pb-4">
                            <div class="flex w-full justify-between space-x-2 pb-2">
                                <div class="space-y-1 flex">
                                    <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                                        From:
                                    </h3>
                                    <p class="text-sm">{post.From}</p>
                                </div>

                            </div>
                            <div class="flex w-full justify-between space-x-2 pb-2">
                                <div class="space-y-1 flex">
                                    <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                                        To:
                                    </h3>
                                    <p class="text-sm">{post.To}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </li>
                <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div class="flex w-full space-x-2 sm:space-x-4">
                       
                        <div class="flex w-full flex-col justify-between pb-4">
                            <div class="flex w-full justify-between space-x-2 pb-2">
                                <div class="space-y-1 flex">
                                    <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                                        Number of Passengers
                                    </h3>
                                    <p class="text-sm">{post.NumberofPassengers}</p>
                                </div>

                            </div>
                            <div class="flex w-full justify-between space-x-2 pb-2">
                                <div class="space-y-1">
                                    <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                                        Date of Ride  :
                                    </h3>
                                    <p class="text-sm">{post.DateofRide}</p>
                                </div>

                            </div>

                        </div>
                        <div class="flex w-full flex-col justify-between pb-4">
                            <div class="flex w-full justify-between space-x-2 pb-2">
                                <div class="space-y-1 flex">
                                    <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                                        Vechicle: 
                                    </h3>
                                    <p class="text-sm">{post.Vechicle}</p>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </li>
                <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div class="flex w-full space-x-2 sm:space-x-4">
                        
                        
                    </div>
                </li>
            </ul>
            <div class="space-y-1 text-right">
                {/* <p>
                    Total amount:<span class="font-semibold"> ₹</span>
                </p> */}
            </div>

            {isAuthor && (
                <div class="flex justify-end space-x-4">
                    <button
                        onClick={() => {
                            navigate(`/edit-post/${post.$id}`)
                        }}
                        type="button"
                        class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => {
                            deletePost()
                        }}
                        type="button"
                        class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Delete
                    </button>
                </div>
            )}

        </div>

    ) : null;
}