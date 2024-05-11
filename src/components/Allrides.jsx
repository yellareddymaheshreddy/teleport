import React,{useState,useEffect} from 'react'
import service from '../appwrite/config'
import RideCard from './RideCard'

const Allrides = () => {
    const [rides, setrides] = useState([])
    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [])
    service.getPosts([]).
    then((posts)=>{
        if(posts){
            setrides(posts.documents)
        }
    })
    
  return (
    <div>
      {rides.map((ride)=>(
        <div key={ride.$id}>
            <RideCard ride={ride}/>
        </div>
      ))}
    </div>
  )
}

export default Allrides
