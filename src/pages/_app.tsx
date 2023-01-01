import '@/styles/globals.css'
import { log } from 'next-axiom'

import type { AppProps } from 'next/app'

export { reportWebVitals } from 'next-axiom'

export default function App({ Component, pageProps }: AppProps) {
  const PLATFORM_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV
  if (PLATFORM_ENV === 'production') {
    log.info('This log is output from Vercel(Production).')
  } else if (PLATFORM_ENV === 'preview') {
    log.info('This log is output from Vercel(Preview).')
  } else if (PLATFORM_ENV === 'development') {
    log.info('This log is output from Vercel(Development).')
  } else {
    log.info('This log is output from Unknown.')
  }
  return <Component {...pageProps} />
}
