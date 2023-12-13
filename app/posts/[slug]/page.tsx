import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getMdFile } from '@/app/api'
import Post, { PostProp } from '@/app/components/Post'
import Markdown from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const data = await getMdFile(slug)
  console.log('data', data)
  //   const content = `
  //   # 제목

  //   ## 부제목

  //   이 문서는 Next.js에서 md 파일을 불러와서 react-markdown으로 보여주는 방법을 설명합니다.
  // `
  return (
    <div>
      <div>{data.slug}</div>
      <div>{data.title}</div>
      <div>{data.subtitle}</div>
      <div>{data.category}</div>
      <div>{data.img}</div>
      <div>{data.date}</div>
      <Markdown>{data.content}</Markdown>
      {/* <ReactMarkdown children={data.content} remarkPlugins={[remarkGfm]} /> */}
    </div>
  )
}

export default PostPage
