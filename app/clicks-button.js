"use client";

import { useState } from "react";

export default function ClicksButton() {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    console.log("Clicked!");
    setClicks(clicks + 1);
  }

  return <button onClick={handleClick}>Clicked {clicks}</button>;
}
