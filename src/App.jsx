import { useRoutes } from "react-router-dom";
import Card from "./component/Card";
import "./index.css";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Card />,
    },
  ]);
  return element;
}

export default App;
