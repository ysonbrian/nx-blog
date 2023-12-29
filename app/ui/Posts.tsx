import React from 'react'

import Post, { PostProp } from '../components/Post'
import { getFeaturedPosts } from '../api'

const Posts = async () => {
  const loadedPosts = await getFeaturedPosts()
  return (
    <div>
      <div className={`text-lg font-bold tracking-wide`}>Featured Posts</div>
      <ul
        className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start gap-4  `}
      >
        {loadedPosts.map((post: PostProp, index) => (
          <li key={index}>
            <Post {...post} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Posts
