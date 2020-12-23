import React, { useCallback, useState, useEffect } from "react";

const Top = () => {
  return (
    <section class="example relative" id="top">
      <img
        class="sm:mx-auto sm:pt-12 pt-6 pl-6 w-full sm:w-4/5 block h-3/5"
        alt="hero"
        src="/top-img.jpg"
      />
      <h1 className="text-white w-1/2 absolute right-0 bottom-2 text-2xl">
        with a natural hair style.
      </h1>
    </section>
  );
};
export default Top;
