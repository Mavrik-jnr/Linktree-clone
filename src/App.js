import styles from "./App.module.css";
import ELink from "./components/Link";
import Profile from "./components/Profile";
import Icon from "./components/Icon";
import slack from "./images/slack.svg";
import github from "./images/Social icon.svg";
import zuri from "./images/zuri.svg";
import i4g from "./images/I4G.svg";
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          index
          path="/"
          element={
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
                <ELink
                  link={"https://twitter.com/Maverick__Jnr"}
                  text={"Twitter Link"}
                />
                <ELink
                  ID={"btn__zuri"}
                  link={"https://training.zuri.team/"}
                  text={"Zuri Team: Find out more about Zuri here!"}
                />
                <ELink
                  ID={"books"}
                  link={"http://books.zuri.team"}
                  text={
                    "Zuri Books: Learn more about the design and coding world with Zuri's bestselling books"
                  }
                />
                <ELink
                  ID={"book__python"}
                  link={
                    " https://books.zuri.team/python-for-beginners?ref_id=MMTobi"
                  }
                  text={
                    "Python Books: Broaden your mind as a pythonista with Zuri's books on the python programming language"
                  }
                />
                <ELink
                  ID={"pitch"}
                  link={"https://background.zuri.team"}
                  text={
                    "Discover the building blocks that made your coders who they are today!"
                  }
                />
                <ELink
                  ID={"book__design"}
                  link={"https://books.zuri.team/design-rules"}
                  text={"Check out the free design books offered by Zuri"}
                />
                <ELink
                  ID={"contact"}
                  link={"/contact"}
                  text={"Contact Me"}
                  rrDom={true}
                />
              </section>
              <div className={styles.social__icons}>
                <img src={slack} alt="" />
                <a href="https://github.com/Mavrik-jnr/Linktree-clone">
                  <img src={github} alt="" />
                </a>
              </div>
            </main>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
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
