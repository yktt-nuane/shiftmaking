import { log } from 'next-axiom'

const PLATFORM_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV
if (PLATFORM_ENV === 'production') {
  log.info('This log is output from Vercel(Production).')
}
if (PLATFORM_ENV === 'preview') {
  log.info('This log is output from Vercel(Preview).')
}
if (PLATFORM_ENV === 'development') {
  log.info('This log is output from Vercel(Development).')
} else {
  log.info('This log is output from Unknown.')
}
