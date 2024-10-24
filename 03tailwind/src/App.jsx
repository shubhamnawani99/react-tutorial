import "./App.css";
import Card from "./card";

function App() {
  let names = ["Card 1", "Card 2", "Card 3"];
  return (
    <>
      <h1 className="bg-blue-300 text-black p-5 rounded-md font-semibold mb-5">
        Tailwind Test Header
      </h1>
      {/* How do we generate multple cards
    with different titles? */}
      <Card name={names[0]} title="Welcome to Card 1" />
      <Card name={names[1]} />
      <Card />{" "}
    </>
  );
}

export default App;
