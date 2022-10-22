import "./App.css";
import Link from "./components/Link";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h4>Annette Black</h4>
      <Link link={"https://google.com"} text={"Zuri Books"} />
      <Profile />
    </div>
  );
}

export default App;
