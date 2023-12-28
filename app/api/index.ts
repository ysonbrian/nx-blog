import { readFile } from 'fs/promises'
import { PostData, PostProp } from '../components/Post'
import path from 'path'
import nodeMailer from 'nodemailer'

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
    const filePath = path.join(process.cwd(), '/data/posts', `${fileName}.md`)
    const posts = await getAllPosts()
    const post = posts.find((post) => post.slug === fileName)

    if (!post) throw new Error(`Cannot find!`)
    const index = posts.indexOf(post)
    const next = index > 0 ? posts[index - 1] : null
    const prev = index < posts.length ? posts[index + 1] : null
    const content = await readFile(filePath, 'utf-8')
    return { ...post, content, next, prev }
  } catch (error) {
    console.log('Error 발생!')
    throw error
  }
}

export async function sendMail() {
  const transporter = await nodeMailer.createTransport({
    // service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  })
  // try {
  //   const { user, pass } = process.env
  //   const transporter = nodeMailer.createTransport({
  //     // service: 'gmail',
  //     host: 'smtp.gmail.com',
  //     port: 465,
  //     secure: true,
  //     auth: { user, pass },
  //   })
  //   const mailOptions = {
  //     to: 'znlsakxls@gmail.com',
  //     subject: '가입 인증 메일',
  //     text: 'Hi Hi',
  //   }
  //   await transporter.sendMail(mailOptions)
  //   return 'success'
  // } catch (error) {
  //   console.log(error)
  // }
}

// export default function handler(req, res) {
//   res.status(200).json({ name: 'Jone Doe' })
// }
