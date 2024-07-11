import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./home-page.scss";
import { Stack } from "@mui/material";

export default function HomePage() {
  return (
    <Stack className="about-container">
      <Stack
        spacing={2}
        sx={{
          textAlign: "left",
        }}
      >
        <h2>Hello, my name is </h2>
        <h1>
          <em>Aidan Dyer</em>
        </h1>
      </Stack>
      <p>
        A <em>Full-Stack Developer</em> with a focus on <em>JavaScript </em>
        with the <em>MERN Stack</em>. I develop
        <em> Responsive user interfaces</em> which follow
        <em> modern web development practices</em>.
      </p>
      <div className="neon-contacts">
        <div className="contacts-container">
          <a tabIndex={0} href="mailto:adyer4201@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="home-icon"
              fixedWidth
            />
          </a>
          <a
            tabIndex={0}
            href="https://github.com/ADAidan"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="home-icon" fixedWidth />
          </a>
          <a
            tabIndex={0}
            href="https://www.linkedin.com/in/aidan-dyer-017462224/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="home-icon"
              fixedWidth
            />
          </a>
        </div>
        <div className="neon-line" />
      </div>
    </Stack>
  );
}
