import React, { useCallback, useState, useEffect } from "react";
// import sneaker from "../public/sneaker.jpg";

const Form = () => {
  return (
    <div class="min-h-screen flex flex-col items-center bg-gray-300">
      <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          Login To Your Account
        </div>
        <div class="mt-10">
          <form action="#">
            <div class="flex flex-col mb-6">
              <label
                for="email"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                E-Mail Address:
              </label>
              <div class="relative">
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>
            <div class="flex flex-col mb-6">
              <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password:
              </label>
              <div class="relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="flex items-center mb-6 -mt-4">
              <div class="flex ml-auto">
                <a
                  href="#"
                  class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                >
                  Forgot Your Password?
                </a>
              </div>
            </div>

            <div class="flex w-full">
              <button
                type="submit"
                class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <span class="mr-2 uppercase">Login</span>
              </button>
            </div>
          </form>
        </div>
        <div class="flex justify-center items-center mt-6">
          <a
            href="#"
            target="_blank"
            class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
          >
            <span class="ml-2">You don't have an account?</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
