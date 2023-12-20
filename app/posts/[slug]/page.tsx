import { getMdFile } from '@/app/api'
import ReactMarkdown from '../../components/MarkdownViewer'
import { AiTwotoneCalendar } from 'react-icons/ai'
import Image from 'next/image'

export type Props = {
  params: {
    slug: string
  }
}

const PostPage = async ({ params: { slug } }: Props) => {
  const { title, description, date, path, content } = await getMdFile(slug)
  console.log('path', path)

  return (
    <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
      <Image
        className='w-full h-1/5 max-h-[500px]'
        src={`${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className='flex flex-col p-4'>
        <div className='flex items-center self-end text-sky-600'>
          <AiTwotoneCalendar />
          <p className='font-semibold ml-2'>{date.toString()}</p>
        </div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
        <div className='w-44 border-2 border-sky-600 mt-4 mb-8' />
        <ReactMarkdown content={content} />
      </section>
    </article>
  )
}

export default PostPage
