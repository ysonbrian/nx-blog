import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Post from './Post'
import { getAllPosts } from '../api'
import { PostProp } from './Post'
import Carousels from './Carousels'

const Like = async () => {
  const posts = await getAllPosts()

  return (
    <div>
      <div className={`text-lg font-bold`}>You may like</div>
      <Carousels posts={posts} />
    </div>
  )
}

export default Like
