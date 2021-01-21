import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div style={{position: 'fixed', width: '100vw', top: 0, left: 0}} className="flex p-2 text-xl">
              <div>
                  DisShop By Team.Bit
              </div>
              <div className="flex-grow"/>
              <div className="nav__right">
                  <Link href='/'>
                      <a>LINK1</a>
                  </Link>
                  <Link href='/'>
                      <a>LINK2</a>
                  </Link>
                  <Link href='/'>
                      <a>LINK3</a>
                  </Link>
                  <Link href='/'>
                      <a>LINK4</a>
                  </Link>
              </div>
          </div>

        <h1 className={styles.title}>
          DisShop
        </h1>

        <p className={styles.description} style={{marginTop: '1vh'}}>
          거래를 더 쉽고 빠르게. DisShop
        </p>

        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h2 style={{width: '20vh', textAlign: 'center'}}>둘러보기</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <h3>
            <a href="https://stormdev.club" target="_blank" rel="noopener noreferrer" style={{color: 'black'}}>
              Powered by STORM
            </a>
        </h3>
      </footer>
    </div>
  )
}
