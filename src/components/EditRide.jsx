import React,{useState,useEffect} from 'react'
import PostForm from './PostForm'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import { notifyfail,notifysuccess } from './toast'

const EditRide = () => {
    const [ride, setrides] = useState(null)
    const {slug}=useParams();
    const navigate=useNavigate();

    useEffect(() => {
        if(slug){
            service.getPost(slug).then((ride)=>{
                if(ride){
                    setrides(ride)
                }
                else{
                    // navigate("/")
                    notifyfail("failed to load")

                }
            }).catch((error)=>{
                notifyfail(error)
            })
        }
    }, [slug,navigate])

    
    return ride?(
        <div>
            <PostForm ride={ride}/>
        </div>
    ):(null);
}

export default EditRide
