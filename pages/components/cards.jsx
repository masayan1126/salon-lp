import React, { useCallback, useState, useEffect } from "react";
import Card from "../../components/Card";

const Cards = () => {
  return (
    <section className="bg-gray-900">
      <h2 className="text-4xl text-gray-300">Card</h2>
      <Card />
    </section>
  );
};

export default Cards;
