import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function Avatar() {
  const img = "/potrait.jpg";
  return <img src={img} alt="Potrait" className="avatar" />;
}

function Intro() {
  return (
    <>
      <h2>Hello my name is Mike Koenders</h2>
      <p>
        I am a developer from Düsseldorf. I love to be part of a cool project as
        a project manager or developer or data analyst. I`ll give my best to
        make your dream come true.
      </p>
    </>
  );
}

function SkillList() {
  return (
    <div className="skillList">
      <Skill skill="JavaScript" color="red" emoji="🥰" />
      <Skill skill="HTML" color="blue" emoji="😎" />
      <Skill skill="CSS" color="green" emoji="😇" />
      <Skill skill="React" color="lightgreen" emoji="🫶" />
      <Skill skill="UX" color="orange" emoji="🤑" />
      <Skill skill="Python" color="pink" emoji="💩" />
      <Skill skill="PHP" color="violet" emoji="😏" />
    </div>
  );
}

function Skill(props) {
  const style = { backgroundColor: props.color };
  return (
    <p className="skill" style={style}>
      {props.skill} {props.emoji}
    </p>
  );
}
