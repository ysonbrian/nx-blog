import nodemailer from 'nodemailer'

export default async (req: any, res: any | undefined) => {
  // 이메일 설정
  const { from, subject, message } = req
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  })

  // 이메일 내용
  const mailOptions = {
    from: from,
    to: 'znlsakxls@gmail.com',
    subject,
    text: message,
  }

  // 이메일 전송
  await transporter.sendMail(mailOptions)

  // 응답
  res.status(200).json({
    message: '이메일 전송 완료',
  })
}
