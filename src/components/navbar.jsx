import { Link } from "react-router-dom";
import "./navbar.scss";

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="navbar">
        <h2 className="my-name">Aidan Dyer</h2>
        <div className="nav-items">
          <Link to="/" className="neon-underline">
            Home
            <div />
          </Link>
          <Link to="/projects" className="neon-underline">
            Projects
            <div />
          </Link>
          <Link to="/course-projects" className="neon-underline">
            Course Projects
            <div />
          </Link>
          <Link to="/certifications" className="neon-underline">
            Certifications
            <div />
          </Link>
        </div>
        <Link to="/contact" className="full-neon-button">
          Contact Me!
        </Link>
      </div>
      <div className="mobile-menu">
        <h2 className="my-name">Aidan Dyer</h2>
      </div>
    </div>
  );
}
