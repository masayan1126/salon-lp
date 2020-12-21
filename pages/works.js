import React, { useCallback, useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Works = () => {
  return (
    <section class="uc-bg-blue text-gray-700 body-font h-auto">
      <div class="container p-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-4xl font-medium title-font mb-4 text-gray-900">
            Works
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="/case-shop.png"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Shooting Stars
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="recette.png"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The Catalyzer
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="/My Fitness.JPEG"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  The 400 Blows
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/602x362"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Neptune
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/605x365"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Holden Caulfield
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/606x366"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                  Alper Kamu
                </h1>
                <p class="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Works;
