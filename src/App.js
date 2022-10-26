import styles from "./App.module.css";
import Link from "./components/Link";
import Profile from "./components/Profile";
import Icon from "./components/Icon";
import slack from "./images/slack.svg";
import github from "./images/Social icon.svg";
import zuri from "./images/zuri.svg";
import i4g from "./images/I4G.svg";

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
              MMTobi
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
            text={
              "Zuri Books: Learn more about the design and coding world with Zuri's bestselling books"
            }
          />
          <Link
            ID={"book__python"}
            link={" https://books.zuri.team/python-for-beginners?ref_id=MMTobi"}
            text={
              "Python Books: Broaden your path to being a pythonista with Zuri's books on python programming language"
            }
          />
          <Link
            ID={"pitch"}
            link={"https://background.zuri.team"}
            text={
              "Discover the building blocks that made your coders who they are today!"
            }
          />
          <Link
            ID={"book__design"}
            link={"https://books.zuri.team/design-rules"}
            text={"Check out the free design books offered by Zuri"}
          />
        </section>
        <div className={styles.social__icons}>
          <img src={slack} alt="" />
          <a href="https://github.com/Mavrik-jnr/Linktree-clone">
            <img src={github} alt="" />
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer__content}>
          <img src={zuri} alt="" />
          <p>HNG Intership 9 Frontend Task</p>
          <img src={i4g} alt="" />
        </div>
      </footer>
    </div>
  );
}

export default App;
