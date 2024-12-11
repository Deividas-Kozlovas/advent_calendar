import { useGlobalContext } from "../../context/context";
import "./App.css";

function App() {
  const { days } = useGlobalContext();

  return (
    <div>
      {days.map((day, index) => (
        <div key={index}>
          <p>{index + 1}</p>
          {day && <span>{day}</span>}
        </div>
      ))}
    </div>
  );
}

export default App;
