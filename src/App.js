import styles from "./App.module.css";
import Link from "./components/Link";
import Profile from "./components/Profile";
import Icon from "./components/Icon";

function App() {
  return (
    <div className={styles.App}>
      <h4>Annette Black</h4>
      <Link link={"https://google.com"} text={"Zuri Books"} />
      <Profile />
      <Icon type="dot" />
    </div>
  );
}

export default App;
