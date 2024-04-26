import ClicksButton from "./clicks-button";

function Header({ title }) {
  return <h1>{title ? title : "React"}</h1>;
}

export default function HomePage() {
  const names = ["Alan Turing", "Isaac Asimov", "Tony Stark"];

  return (
    <div>
      <Header />
      <Header title="Innovate. Code. Coffee." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ClicksButton />
    </div>
  );
}
