import React from 'react'
import { useForm } from 'react-hook-form'
import appwriteservice from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ID } from 'appwrite'

const PostForm = ({ ride }) => {
    const { register, handlesubmit } = useForm({
        defaultValues: {
            from: ride?.from || '',
            to: ride?.to || '',
            vechicle: ride?.vechicle || '',
            NumberofPassengers: NumberofPassengers?.from || '',
            DateofRide: ride?.DateofRide || '',
            Message: ride?.Message || '',
            Rideid: ride?.rideid || ID.unique()
        }
    });
    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData)

    const submit = async (data) => {
        if (ride) {
            const dbride = await appwriteservice.updatePost(ride.$id, { ...data })
            if (dbride) {
                navigate(`ride/${dbride.$id}`)
            }

        }
        else {
            const dbride = await appwriteservice.createPost({
                ...data,
                Createdby: userData.$id,
            })
            if (dbride) {
                navigate(`ride/${dbride.$id}`)
            }
        }

    }
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <input
                label="from :"
                placeholder="from"
                className="mb-4"
                {...register("from", { required: true })}
            /><input
                label="to :"
                placeholder="to"
                className="mb-4"
                {...register("to", { required: true })}
            /><input
                label="vechicle :"
                placeholder="car,bike...."
                className="mb-4"
                {...register("vechicle", { required: true })}
            /><input
                label="number of pass :"
                placeholder="Title"
                className="mb-4"
                {...register("NumberofPassengers", { required: true })}
            /><input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("DateofRide", { required: true })}
            /><input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("Message", { required: true })}
            /><input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("Rideid", { required: true })}
            />
            
            
            <button type=' submit' className='bg-green-500 w-full'>
                {ride? "update" : "Submit"}

            </button>
            
        </div>
    </form>
    )
}

export default PostForm
