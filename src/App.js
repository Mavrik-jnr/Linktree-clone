import styles from "./App.module.css";
import Link from "./components/Link";
import Profile from "./components/Profile";
import Icon from "./components/Icon";

function App() {
  return (
    <div className={styles.App}>
      <main>
        <Icon parentStyle={styles.menu} type="share" />
        <section className={styles.profile__section}>
          <div className={styles.profile__content}>
            <Profile />
            <h4 id="twitter">@Maverick__jnr</h4>
            <h4 id="slack" className={styles.slack}>
              Toby
            </h4>
          </div>
        </section>
        <section className={styles.links__section}>
          <Link text={"Twitter Link"}></Link>
          <Link
            ID={"btn__zuri"}
            link={"https://training.zuri.team/"}
            text={"Zuri Team"}
          />
          <Link text={"Zuri Books"} />
          <Link text={"Python Books"} />
          <Link text={"Background Check for Coders"} />
          <Link text={"Design Books"} />
        </section>
      </main>

      {/* <Link link={"https://google.com"} text={"Zuri Books"} />
       */}
    </div>
  );
}

export default App;
