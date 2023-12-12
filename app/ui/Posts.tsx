import React from 'react'

import Post from '../components/Post'
import { getMdFiles } from '../api'

const Posts = async () => {
  const loadedPosts = await getMdFiles()
  return (
    <div>
      <div className={`text-lg font-bold tracking-wide`}>Featured Posts</div>
      <ul
        className={` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-start gap-4 p-6 `}
      >
        {loadedPosts.map((post) => (
          <Post {...post} />
        ))}
      </ul>
    </div>
  )
}

export default Posts
