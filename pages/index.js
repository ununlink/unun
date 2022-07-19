import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>✧unun.</title>
      </Head>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
        ✧unun.
        </h1>
      </main>
    </div>
  )
}
