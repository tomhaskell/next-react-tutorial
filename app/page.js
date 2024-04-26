import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "React"}</h1>;
}

export default function HomePage() {
  const names = ["Alan Turing", "Isaac Asimov", "Tony Stark"];

  const [clicks, setClicks] = useState(0);

  function handleClick() {
    console.log("Clicked!");
    setClicks(clicks + 1);
  }

  return (
    <div>
      <Header />
      <Header title="Innovate. Code. Coffee." />
      <ul>
        {names.map((name) => (
          <li key="{name}">{name}</li>
        ))}
      </ul>
      <button onClick="{handleClick}">Clicked {clicks}</button>
    </div>
  );
}
