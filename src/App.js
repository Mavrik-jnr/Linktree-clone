import styles from "./App.module.css";
import Link from "./components/Link";
import Profile from "./components/Profile";
import Icon from "./components/Icon";
import slack from "./images/slack.svg";
import github from "./images/Social icon.svg";

function App() {
  return (
    <div className={styles.App}>
      <main>
        <Icon parentStyle={styles.menu} type="dot" />
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
          <Link
            link={"https://twitter.com/Maverick__Jnr"}
            text={"Twitter Link"}
          />
          <Link
            ID={"btn__zuri"}
            link={"https://training.zuri.team/"}
            text={"Zuri Team"}
          />
          <Link
            ID={"books"}
            link={"http://books.zuri.team"}
            text={"Zuri Books"}
          />
          <Link
            ID={"book__python"}
            link={"http://books.zuri.team"}
            text={"Python Books"}
          />
          <Link
            ID={"pitch"}
            link={"https://background.zuri.team"}
            text={"Background Check for Coders"}
          />
          <Link
            ID={"book__design"}
            link={"https://books.zuri.team/design-rules"}
            text={"Design Books"}
          />
        </section>
        <div className="social__icons">
          <img src={slack} alt="" />
          <img src={github} alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
