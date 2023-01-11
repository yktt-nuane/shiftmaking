import styles from '@/styles/Home.module.css'

import { log } from 'next-axiom'

export default function Home() {
  const LOG_TEST = process.env.LOG_TEST

  if (LOG_TEST) {
    log.info(`This log is output from Vercel: ${LOG_TEST}.`)
  } else {
    log.info('This log is output from Unknown.')
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Shiftmaking</h1>
        <h2>{LOG_TEST}</h2>
      </main>
    </div>
  )
}
