import { log } from 'next-axiom'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    log.info(
      `This log is output from Vercel: ${process.env.NEXT_PUBLIC_VERCEL_ENV}.`
    )
  } else {
    log.info('This log is output from Unknown.')
  }
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
