import React,{useState,useEffect} from 'react'
import PostForm from './PostForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const EditRide = () => {
    const [ride, setrides] = useState(null)
    const {slug}=useParams();
    const navigate=useNavigate();
    const allrides=useSelector(state=>state.rides.rides)

    useEffect(() => {
        allrides.map((ride)=>{
            if(ride.Rideid==slug){
                setrides(ride)
            }
        })
    }, [slug,navigate])
    
    return ride?(
        <div>
            <PostForm ride={ride}/>
        </div>
    ):(null);
}

export default EditRide
