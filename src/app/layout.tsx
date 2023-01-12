import { log } from 'next-axiom'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (process.env.LOG_TEST) {
    log.info(`This log is output from Vercel: ${process.env.LOG_TEST}.`)
  } else {
    log.info('This log is output from Unknown.')
  }
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
