import { getFeaturedPosts, getMdFile } from '@/app/api'
import AdjacentPostCard from '@/app/components/AdjacentPostCard'
import PostContent from '@/app/components/PostContent'
import { Metadata } from 'next'

import Image from 'next/image'

export type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getMdFile(slug)
  return {
    title,
    description,
  }
}

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getMdFile(slug)
  const { title, path, next, prev } = post
  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
      <Image
        className='w-full h-1/5 max-h-[500px]'
        src={`${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className='flex shadow-md '>
        {prev && <AdjacentPostCard post={prev} type='prev' />}
        {next && <AdjacentPostCard post={next} type='next' />}
      </section>
    </article>
  )
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default PostPage
