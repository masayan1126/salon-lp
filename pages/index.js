import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/components/cards">
          <a>カードコンポーネントを見る</a>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
