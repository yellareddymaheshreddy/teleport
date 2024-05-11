import React,{useState,useEffect} from 'react'
import PostForm from './PostForm'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

const EditRide = () => {
    const [ride, setrides] = useState(null)
    const {date}=useParams();
    navigate=useNavigate();

    useEffect(() => {
      first
    
      return () => {
        if(date){
            service.getPost(date).then((ride)=>{
                if(ride){
                    setrides(ride)
                }
                else{
                    navigate("/")
                }
            })
        }
      }
    }, [date,navigate])
    
    return ride?(
        <div>
            <PostForm/>
        </div>
    ):(null);
}

export default EditRide
