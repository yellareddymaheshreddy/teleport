import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import RideCard from './RideCard';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const navigate=useNavigate();

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                console.log(posts[0])
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <div>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                            <button onClick={()=>{
                                
                                navigate("/all-posts")
                            }}>
                                allposts

                            </button>
                            <button onClick={()=>{
                                navigate("/edit-post/slug")
                            }}>
                                editpost
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <div>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <RideCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home