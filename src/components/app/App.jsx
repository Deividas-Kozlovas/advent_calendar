import { useGlobalContext } from "../../context/context";
import "./App.css";

function App() {
  const { days } = useGlobalContext();

  return (
    <>
      <p>initail app</p>
    </>
  );
}

export default App;
