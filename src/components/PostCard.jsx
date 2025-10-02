import React from 'react'
import appwriteService from '../appwrite/appwriteConfig'
import { Link } from 'react-router-dom'

const PostCard = ({
    $id,
    title,
    featuredImage
}) => {
  return (
     <Link to={`/post/${$id}`} className='block border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white'>
        {featuredImage && (
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-48 object-cover' />
        )}
        <div className='p-4'>
            <h2 className='text-lg font-semibold mb-2'>{title}</h2>
            <p className='text-blue-500 underline'>Read More...</p>
        </div>
     </Link>
  )
}

export default PostCard
