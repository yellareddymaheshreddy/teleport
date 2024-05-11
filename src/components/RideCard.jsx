import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

const RideCard = ({$id,from,to,Message}) => {
  return (
    <Link to={`post/${$id}`}>
         <div>
            from: {from}
            to: {to},
            message:{ridermessage}
         </div>
    
    </Link>
  )
}

export default RideCard
