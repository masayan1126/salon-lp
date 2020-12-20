import React, { useCallback, useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Contact = () => {
  return (
    <section class="text-gray-700 body-font h-auto">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -mb-10 text-center">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-4xl font-medium title-font mb-4 text-gray-900">
              Contact
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr
            </p>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-1/2 mx-auto"
                src="/profile_image.jpg"
              />
            </div>
            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 sm:text-left sm:px-32">
              Masaya Nishigaki
            </h2>
            <p class="leading-relaxed sm:text-left sm:px-32">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
          <div class="sm:w-1/2 mb-10 px-4">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-1/2 mx-auto"
                src="https://dummyimage.com/1202x502"
              />
            </div>
            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 sm:text-left sm:px-32">
              The Catalyzer
            </h2>
            <p class="leading-relaxed text-base sm:text-left sm:px-32">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
