import React, { useCallback, useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import WebIcon from "@material-ui/icons/Web";
import AppsIcon from "@material-ui/icons/Apps";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
});

const Menu = () => {
  const classes = useStyles();

  return (
    <section class="text-gray-700 body-font" id="menu">
      <div class="container px-5 py-12 pb-5 mx-auto">
        <h1 class="text-center sm:text-4xl text-4xl font-medium title-font text-gray-900">
          Menu
        </h1>
        <div class="flex mt-2 justify-center">
          <div class="w-16 h-1 rounded-full uc-bg-brown inline-flex mb-10"></div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-4 border-gray-200 sm:flex-row flex-col">
          <img
            class="sm:w-32 sm:h-32 h-80 w-96 sm:mr-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0"
            alt="hero"
            src="/menu-cut-image.JPG"
          />
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              ヘアーカット ¥6000〜
            </h2>
            <p class="px-14 leading-relaxed text-xs">
              お客様のご要望に沿ったヘアーカットをさせていただきます。
            </p>
            <a class="mt-3 inline-flex items-center text-xs">
              詳細を見る
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-4 border-gray-200 sm:flex-row flex-col">
          <img
            class="sm:w-32 sm:h-32 h-80 w-96 sm:mr-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0"
            alt="hero"
            src="/menu-spa.JPG"
          />
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              ヘッドスパ ¥6000〜
            </h2>
            <p class="px-12 leading-relaxed text-xs">
              高品質なトリートメントを掛け合わせた専用のマッサージ液を使用して、
              適度な力加減でお客様の日頃の疲れを癒します。
            </p>
            <a class="mt-3 inline-flex items-center text-xs">
              詳細を見る
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-4 border-gray-200 sm:flex-row flex-col">
          <img
            class="sm:w-32 sm:h-32 h-80 w-96 sm:mr-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0"
            alt="hero"
            src="/menu-color-img.jpeg"
          />
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              カラー ¥6000〜
            </h2>
            <p class="px-12 leading-relaxed text-xs">
              お客様の髪質を保ったまま、お好みのカラーリングに仕上げます。
            </p>
            <a class="mt-3 inline-flex items-center text-xs">
              詳細を見る
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-4 border-gray-200 sm:flex-row flex-col">
          <img
            class="sm:w-32 sm:h-32 h-80 w-96 sm:mr-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0"
            alt="hero"
            src="/IMG_5393.JPG"
          />
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              パーマ ¥8000〜
            </h2>
            <p class="px-12 leading-relaxed text-xs">
              コールドパーマからデジタルパーマ、エアウエーブなど、お客様の髪質とご要望に沿ったパーマネントウエーブをご提案します。
            </p>
            <a class="mt-3 inline-flex items-center text-xs">
              詳細を見る
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Menu;
