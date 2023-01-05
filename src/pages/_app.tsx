import '@/styles/globals.css'
import { log } from 'next-axiom'

import type { AppProps } from 'next/app'

export { reportWebVitals } from 'next-axiom'

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    log.info(
      `This log is output from Vercel: ${process.env.NEXT_PUBLIC_VERCEL_ENV}.`
    )
  } else {
    log.info('This log is output from Unknown.')
  }
  return <Component {...pageProps} />
}
