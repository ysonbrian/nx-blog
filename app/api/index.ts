import fs from 'fs'
import matter from 'gray-matter'

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
