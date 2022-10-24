import styles from "./App.module.css";
import Link from "./components/Link";
import Profile from "./components/Profile";
import Icon from "./components/Icon";

function App() {
  return (
    <div className={styles.App}>
      <main>
        <section className="profile__section">
          <Profile />
          <h4 id="twitter">@Maverick__jnr</h4>
          <h4 id="slack" className={styles.slack}>
            Toby
          </h4>
        </section>
      </main>
      <Profile />
      <h4>Annette Black</h4>
      <Link link={"https://google.com"} text={"Zuri Books"} />

      <Icon type="dot" />
    </div>
  );
}

export default App;
