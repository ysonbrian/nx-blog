import fs from 'fs'
import matter from 'gray-matter'
import { PostProp } from '../components/Post'

export const getMdFiles = async () => {
  const files = fs.readdirSync('public/data')

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`public/data/${fileName}`, 'utf-8')
    const { data: frontmatter, content } = matter(readFile)

    return {
      slug,
      title: frontmatter.title,
      subtitle: frontmatter.subTitle,
      category: frontmatter.category,
      content,
      img: frontmatter.img,
      date: frontmatter.date,
    }
  })
  return posts
}

export const getMdFile = async (slug: string): Promise<PostProp> => {
  const files = fs.readdirSync('public/data')

  // const posts = files.map((fileName) => {
  //   const slug = fileName.replace('.md', '')
  //   const readFile = fs.readFileSync(`public/data/${fileName}`, 'utf-8')
  //   const { data: frontmatter, content } = matter(readFile)

  //   return {
  //     slug,
  //     title: frontmatter.title,
  //     subtitle: frontmatter.subTitle,
  //     category: frontmatter.category,
  //     content,
  //     img: frontmatter.img,
  //     date: frontmatter.date,
  //   }
  // })

  try {
    const post = files.filter((file) => file === `${slug}.md`)[0]
    console.log('files', post)

    if (!post) throw Error()
    const readFile = fs.readFileSync(`public/data/${post}`, 'utf-8')
    const { data: frontmatter, content } = matter(readFile)

    return {
      slug,
      title: frontmatter.title,
      subtitle: frontmatter.subTitle,
      category: frontmatter.category,
      content,
      img: frontmatter.img,
      date: frontmatter.date,
    }
  } catch (error) {
    console.log('Error 발생!')
    throw error
  }
}
