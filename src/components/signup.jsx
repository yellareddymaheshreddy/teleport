import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <section>
            <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <div class="mb-2 flex justify-center">
                        <img src="/favicon.svg" alt="Teleport" height={56} width={56} />
                    </div>
                    <h2 class="text-center text-2xl font-bold leading-tight text-black">
                        Sign up to create account
                    </h2>
                    <p class="mt-2 text-center text-base text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            title=""
                            class="font-medium text-black transition-all duration-200 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                    {error && <p className='text-red-500 text-center capitalize font-medium'> {error}</p>}

                    <form onSubmit={handleSubmit(create)} method="POST" class="mt-8">
                        <div class="space-y-5">
                            <div>
                                <label for="name" class="text-base font-medium text-gray-900">
                                    {" "}
                                    Full Name{" "}
                                </label>
                                <div class="mt-2">
                                    <input
                                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Full Name"
                                        {...register("name", { required: true })}
                                        id="name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="text-base font-medium text-gray-900">
                                    {" "}
                                    Email address{" "}
                                </label>
                                <div class="mt-2">
                                    <input
                                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        {...register("email", {
                                            required: true,
                                            validate: {
                                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                    "Email address must be a valid address",
                                            }
                                        })}
                                    />
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="text-base font-medium text-gray-900">
                                        {" "}
                                        Password{" "}
                                    </label>
                                </div>
                                <div class="mt-2">
                                    <input
                                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="text"
                                        placeholder="Password"
                                        id="password"
                                        {...register("password", { required: true })}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                >
                                    Create Account{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="ml-2"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>
        </section>

    )
}

export default Signup