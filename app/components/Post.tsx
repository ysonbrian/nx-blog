import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export type PostProp = {
  title: string
  description: string
  date: Date
  category: string
  path: string
  slug: string
  featured: boolean
}

export type PostData = PostProp & { content: string }

const Post = (post: PostProp) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      key={post.title}
      className={` rounded-lg hover:cursor-pointer overflow-hidden shadow-lg`}
    >
      <Image
        src={`${post.path}.png`}
        alt={post.title}
        width={350}
        height={200}
        className={`rounded-tl-lg rounded-tr-lg w-full`}
      />
      <div className={`flex flex-col items-center gap-1 bg-white p-4`}>
        <time className={`self-end text-xs`}>{post.date.toString()}</time>
        <h3 className={`text-md font-bold`}>{post.title}</h3>
        <p className={`text-sm w-full truncate text-center `}>
          {post.description}
        </p>
        <span className={`p-1 bg-emerald-400 rounded-lg text-sm px-2 py-2`}>
          {post.category}
        </span>
      </div>
    </Link>
  )
}

export default Post
