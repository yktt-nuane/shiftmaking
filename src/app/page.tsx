'use client'

import styles from '@/styles/Home.module.css'

export default function Home() {
  const LOG_TEST = process.env.LOG_TEST

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Shiftmaking</h1>
        <h2>{LOG_TEST}</h2>
      </main>
    </div>
  )
}
