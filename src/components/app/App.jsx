import { useGlobalContext } from "../../context/context";
import "./App.scss";

function App() {
  const { days } = useGlobalContext();

  return (
    <div className="grid">
      {days.map((day, index) => (
        <div className="grid__card" key={index}>
          <p>{index + 1}</p>
          {day && <span>{day}</span>}
        </div>
      ))}
    </div>
  );
}

export default App;
