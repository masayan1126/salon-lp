import React, { useCallback, useState, useEffect } from "react";

const Top = () => {
  return (
    <section class="text-gray-700 body-font h-screen flex items-start sm:items-center">
      <div class="container mx-auto flex p-10 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/top.png"
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            専門性を活かしたWEBデザインと
            <br class="hidden lg:inline-block" />
            コーディングで高品質なプロダクトをお届けします。
          </h1>
          <p class="mb-8 leading-relaxed">
            私たちは、パートナー制度を採用しています。これにより、デザイン・コーディング双方の領域において、より高品質かつ専門性の高いプロダクトを作成する事が可能です。
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white uc-bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              問い合わせする
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Top;
