import React, { useCallback, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Top from "./top";
import Menu from "./menu";
import Staff from "./staff";
import Access from "./access";
import Footer from "./footer";
// import $ from "jquery";

export default function Home() {
  if (process.browser) {
    window.onscroll = () => {
      console.log(`現時点のY座標${window.pageYOffset}`);
      const menuSectionHeight = document.getElementById("menu");
      const staffSectionHeight = document.getElementById("staff");
      const accessSectionHeight = document.getElementById("access");
      console.log(
        `サービスセクションの高さ${
          menuSectionHeight.getBoundingClientRect().bottom
        }`
      );
      if (window.pageYOffset > menuSectionHeight.getBoundingClientRect().top) {
        menuSectionHeight.classList.add("uc-fadein");
      }

      if (window.pageYOffset > staffSectionHeight.getBoundingClientRect().top) {
        staffSectionHeight.classList.add("uc-fadein");
      }

      if (
        window.pageYOffset > accessSectionHeight.getBoundingClientRect().top
      ) {
        accessSectionHeight.classList.add("uc-fadein");
      }
    };
  }
  // $(window).on("load scroll", function () {
  //   add_class_in_scrolling($("#top"));
  //   add_class_in_scrolling($("#service"));
  //   add_class_in_scrolling($("#works"));
  //   add_class_in_scrolling($("#contact"));
  // });

  // スクロールで要素が表示された時にclassを付与する
  // function add_class_in_scrolling(target) {
  //   var winScroll = $(window).scrollTop(); //スクロールの上下位置を取得
  //   var winHeight = $(window).height(); //ウィンドウの高さを取得
  //   var scrollPos = winScroll + winHeight; //上記の合計（スクロールポジション）

  //   if (target.offset().top < scrollPos) {
  //     //classをつけたい要素の上下位置がスクロールポジションより小さい場合＝ウィンドウ内に表示された場合
  //     target.addClass("uc-fadein");
  //   }
  // }

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
    <div className="uc-bg-gray">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main>
        <Top />
        <Menu />
        <Staff />
        <Access />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
