import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import MyNFT from '../components/MyNFT'
import Link from 'next/link';




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
        {/* <div className='embed-cont'>
          <div className="nft-embed-wrapper">
            <iframe src="https://embed.zora.co/0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7/3543?title=true&controls=false&loop=false&autoplay=false&market=false" width="100%" height="100%" scrolling="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-pointer-lock allow-same-origin allow-scripts allow-popups">
            </iframe>
          </div>
        </div> */}
        {/* <MyNFT /> */}
        <Link href="/mint">
          <a>
            mint!
          </a>  
        </Link>
      </main>
    </div>
  )
}
