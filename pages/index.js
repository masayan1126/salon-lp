import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Top from "./top";
import Service from "./service";

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
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main>
        <Top />
        <Service />
      </main>

      <footer></footer>
    </div>
  );
}
