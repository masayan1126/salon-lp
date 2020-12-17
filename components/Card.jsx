import React, { useCallback, useState, useEffect } from "react";
// import sneaker from "../public/sneaker.jpg";

const Card = () => {
  return (
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
  );
};

export default Card;
