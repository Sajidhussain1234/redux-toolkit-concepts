import logo from "./logo.svg";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";

function App() {
  const account = useSelector((state) => state.account);
  const { points } = useSelector((state) => state.bonus);

  return (
    <div className="App">
      <h1> App Component </h1>
      <h4>
        Total Amount:{" "}
        {account.pending
          ? "Loading..."
          : account.error
          ? account.error.message
          : account.amount}
      </h4>
      <h4>Total Points: {points}</h4>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;
