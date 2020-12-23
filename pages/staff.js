import React, { useCallback, useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Staff = () => {
  return (
    <section class="text-gray-700 body-font" id="staff">
      <div class="container px-5 py-2 mx-auto">
        <h1 class="text-center sm:text-4xl text-4xl font-medium title-font text-gray-900">
          Staff
        </h1>
        <div class="flex mt-2 justify-center">
          <div class="w-16 h-1 rounded-full uc-bg-brown inline-flex mb-10"></div>
        </div>

        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
            <img
              class="rounded-full sm:w-32 sm:h-32 h-40 w-40 sm:mr-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0"
              alt="hero"
              src="/staff-1.JPG"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                江藤 加奈子
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
            <img
              class="rounded-full sm:w-32 sm:h-32 h-40 w-40 sm:mr-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0"
              alt="hero"
              src="/staff-2.JPG"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                水島 利恵
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
            <img
              class="rounded-full sm:w-32 sm:h-32 h-40 w-40 sm:mr-10 inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0"
              alt="hero"
              src="/staff-3.JPG"
            />
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                斎藤 翔太
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Staff;
