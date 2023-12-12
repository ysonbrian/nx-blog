import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Post from './Post'
import { getMdFiles } from '../api'
import { PostProp } from './Post'
import Carousels from './Carousels'

const Like = async () => {
  const posts = await getMdFiles()

  return (
    <div>
      <div className={`text-lg font-bold`}>You may like</div>
      <Carousels posts={posts} />
    </div>
  )
}

export default Like
