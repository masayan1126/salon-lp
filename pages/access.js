import React, { useCallback, useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Access = () => {
  return (
    <section class="text-gray-700 body-font relative px-5 py-16" id="access">
      <h1 class="text-center sm:text-4xl text-4xl font-medium title-font text-gray-900">
        Access
      </h1>
      <div class="flex mt-2 justify-center">
        <div class="w-16 h-1 rounded-full uc-bg-brown inline-flex mb-10"></div>
      </div>
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-4 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1644.4286593819343!2d135.41629945819776!3d34.48114365610249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000c573fcda3f79%3A0xafb7b91ef86e05b8!2z44CSNTk0LTAwNzUg5aSn6Ziq5bqc5ZKM5rOJ5biC57mB5ZKM55S6!5e0!3m2!1sja!2sjp!4v1608635173738!5m2!1sja!2sjp"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                className="w-full h-full"
              ></iframe>
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <img
                  class="sm:w-32 sm:h-32 h-40 w-full inline-flex items-center justify-center bg-indigo-100 text-indigo-500 flex-shrink-0"
                  alt="hero"
                  src="/access-image.jpg"
                />
                <div class="flex flex-col">
                  <h2 class="text-left font-medium title-font mt-4 text-gray-900 text-xl">
                    "美容室名"
                  </h2>
                  <p class="text-left text-base text-gray-600">
                    大阪府和泉市繁和町399-5 JR阪和線
                  </p>
                  <p class="text-left text-base text-gray-600">
                    和泉府中駅から徒歩13分
                  </p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="text-left leading-relaxed text-lg mb-4">
                  Meggings portland fingerstache lyft, post-ironic fixie man bun
                  banh mi umami everyday carry hexagon locavore direct trade art
                  party. Locavore small batch listicle gastropub farm-to-table
                  lumbersexual salvia messenger bag. Coloring book flannel
                  truffaut craft beer drinking vinegar sartorial, disrupt
                  fashion axe normcore meh butcher. Portland 90's scenester
                  vexillologist forage post-ironic asymmetrical, chartreuse
                  disrupt butcher paleo intelligentsia pabst before they sold
                  out four loko. 3 wolf moon brooklyn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Access;
