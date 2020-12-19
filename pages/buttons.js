import React, { useCallback, useState, useEffect } from "react";
import Button from "../components/Button";

const Buttons = () => {
  return (
    <section className="bg-gray-900 h-screen">
      <h2 className="text-4xl text-gray-300">Button</h2>
      <Button />
    </section>
  );
};

export default Buttons;
