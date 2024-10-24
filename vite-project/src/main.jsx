import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const ReactElement = {
  type: "a",
  prop: {
    href: "QUACK",
    target: "_blank",
  },
  hello: function Hello() {
    return <h1>Hello World from inside Custom Element</h1>;
  },
};

createRoot(document.getElementById("root")).render(ReactElement.hello());
