import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='container mx-auto'>
      <div className={`flex flex-col justify-center items-center gap-1`}>
        <div>Image</div>
        <div className={`text-xl font-black`}>Hi, I'm Crypto313</div>
        <div className={`text-lg font-bold`}>Full-stack engineer</div>
        <Link
          href={`/contact`}
          className={`p-3 bg-amber-400 rounded-xl font-bold`}
        >
          Contact Me
        </Link>
      </div>
    </main>
  )
}
