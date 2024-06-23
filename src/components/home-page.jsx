import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./home-page.scss";

export default function HomePage() {
  return (
    <div className="about-container main-container">
      <h1>
        Hello, I'm <em>Aidan Dyer</em>
      </h1>
      <p>
        An aspiring <em>Front-end Developer</em> with a focus on <em>React</em>{" "}
        and a strong foundation in <em>JavaScript</em> and{" "}
        <em>modern web development practices</em>. I am seeking a position where
        I can learn new skills and grow as a developer.
      </p>
      <div>
        <a tabIndex={0} href="mailto:adyer4201@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="home-icon" fixedWidth />
        </a>
        <a tabIndex={0} href="https://github.com/ADAidan" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="home-icon" fixedWidth />
        </a>
        <a
          tabIndex={0}
          href="https://www.linkedin.com/in/aidan-dyer-017462224/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="home-icon" fixedWidth />
        </a>
      </div>
    </div>
  );
}
