import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-blue-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/components/cards">
          <a>カードコンポーネントを見る</a>
        </Link>
      </main>

      <footer></footer>
    </div>
  );
}
