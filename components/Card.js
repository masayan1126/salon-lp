import React, { useCallback, useState, useEffect } from "react";
// import sneaker from "../public/sneaker.jpg";

const Card = () => {
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-2xl text-gray-300">Simple Card</p>
      <div className="card__container w-56 h-auto shadow-md max-w-sm rounded-md">
        <div className="card__imgframe w-full h-auto box-border">
          <img className="h-48 w-full" src="/sneaker.jpg" alt="" />
        </div>
        <div className="card__textbox w-full h-auto p-3 box-border text-left bg-white">
          <div className="card__titletext text-xl font-bold leading-5">
            <p className="">Sneaker</p>
          </div>
          <div className="card__overviewtext text-xs text-base">
            <p className="text-right">¥3,980</p>
          </div>
        </div>
      </div>
      <section className="w-full bg-gray-700 mt-4 p-3">
        <div className="text-right">
          <button>Copy</button>
        </div>
        <pre className="w-full whitespace-pre-wrap">
          <code>
            {`
            <div className="card__container w-56 h-auto shadow-md max-w-sm rounded-md">
              <div className="card__imgframe w-full h-auto box-border">
                <img className="h-48 w-full" src="/sneaker.jpg" alt="" />
              </div>
              <div className="card__textbox w-full h-auto p-3 box-border text-left">
                <div className="card__titletext text-xl font-bold leading-5">
                  <p className="">Sneaker</p>
                </div>
                <div className="card__overviewtext text-xs text-base">
                  <p className="text-right">¥3,980</p>
                </div>
              </div>
            </div>
          `}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default Card;
