import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  if (process.browser) {
    const vh = window.innerHeight;
    const calcHeight = () => {
      document.getElementById("__next").style.height = vh + "px";
      console.log(vh);
    };
    useEffect(() => {
      calcHeight();
    }, [window.addEventListener("resize", calcHeight)]);
    // window.addEventListener("resize", calcHeight)
  }

  return (
    <div className="font-sans bg-blue-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/cards">
          <a>カードコンポーネントを見る</a>
        </Link>
        <Link href="/calendar">
          <a>カレンダーコンポーネントを見る</a>
        </Link>
      </main>

      <footer></footer>
    </div>
  );
}
