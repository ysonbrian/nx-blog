import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type PostProp = {
  slug: string
  title: string
  subtitle: string
  category: string
  content: string
  img: string
  date: string
}

const Post = (post: PostProp) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      key={post.title}
      className={` rounded-lg hover:cursor-pointer`}
    >
      <Image
        src={post.img}
        alt={post.title}
        width={350}
        height={200}
        className={`rounded-tl-lg rounded-tr-lg w-full`}
      />
      <div className={`flex flex-col items-center gap-1 bg-white p-4`}>
        <div className={`flex self-end text-sm`}>{post.date}</div>
        <div className={`text-lg font-bold`}>{post.title}</div>
        <div className={`text-sm `}>{post.subtitle}</div>
        <div className={`p-1 bg-emerald-400 rounded-md`}>{post.category}</div>
      </div>
    </Link>
  )
}

export default Post
