import logo from "./logo.svg";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <Timer timeToCountDown={new Date(10000000)} />
    </div>
  );
}

export default App;
