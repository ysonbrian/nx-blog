import fs from 'fs'
import { readFile } from 'fs/promises'
import matter from 'gray-matter'
import { PostData, PostProp } from '../components/Post'
import path from 'path'

export async function getFeaturedPosts(): Promise<PostProp[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured))
}

export async function getAllPosts(): Promise<PostProp[]> {
  // const files = fs.readdirSync('/data')
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  return readFile(filePath, 'utf-8')
    .then<PostProp[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
}

export async function getMdFile(fileName: string): Promise<PostData> {
  try {
    const post = path.join(process.cwd(), '/data/posts', `${fileName}.md`)
    const metadata = await getAllPosts().then((post) =>
      post.find((post) => post.slug === fileName)
    )
    if (!metadata) throw new Error(`Cannot find!`)
    const content = await readFile(post, 'utf-8')
    return { ...metadata, content }
  } catch (error) {
    console.log('Error 발생!')
    throw error
  }
}
