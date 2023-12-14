import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { getMdFile } from '@/app/api'
import Post, { PostProp } from '@/app/components/Post'
import Markdown from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ReactSyntaxHighlighter, {
  Prism as SyntaxHighlighter,
} from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Image from 'next/image'

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const data = await getMdFile(slug)
  console.log('data', data)
  const content = `
    # 제목

    ## 부제목

    이 문서는 Next.js에서 md 파일을 불러와서 react-markdown으로 보여주는 방법을 설명합니다.
  `
  const markdown = '# Hi, *Pluto*!'
  return (
    // <div>
    //   <div>{data.slug}</div>
    //   <div>{data.title}</div>
    //   <div>{data.subtitle}</div>
    //   <div>{data.category}</div>
    //   <div>{data.img}</div>
    //   <div>{data.date}</div>
    //   {/* <Markdown>{data.content}</Markdown> */}
    //   {/* <ReactMarkdown children={data.content} remarkPlugins={[remarkGfm]} /> */}
    //   <Markdown>{markdown}</Markdown>
    // </div>
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <ReactSyntaxHighlighter
                language={match[1]}
                PreTag='div'
                {...props}
                style={materialDark}
              >
                {String(children).replace(/\n$/, '')}
              </ReactSyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            )
          },
          img: (image) => (
            <Image
              src={image.src || ''}
              alt={image.alt || ''}
              width={500}
              height={300}
            />
          ),
        }}
      >
        {data.content}
      </ReactMarkdown>
    </div>
  )
}

export default PostPage
