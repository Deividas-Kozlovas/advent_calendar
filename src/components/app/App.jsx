import { useGlobalContext } from "../../context/context";
import "./App.scss";

function App() {
  const { days, openedDays, openDay } = useGlobalContext();

  return (
    <div className="grid">
      {days.map((day, index) => (
        <div className="grid__card" key={index}>
          <p>{index + 1}</p>
          {}
          {day && <span onClick={() => openDay(index + 1)}>{day}</span>}
          {openedDays.includes(index + 1) && (
            <span>Day {index + 1} is opened!</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
