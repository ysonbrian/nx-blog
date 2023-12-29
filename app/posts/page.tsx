import React from 'react'
import Posts from '../ui/Posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NX Posts',
  description: 'All the posts from NX',
}

const PostsPage = () => {
  return (
    <div className={`container mx-auto`}>
      <Posts />
    </div>
  )
}

export default PostsPage
