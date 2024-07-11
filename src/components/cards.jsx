import PropTypes from "prop-types";
import "./cards.scss";

export const ProjectCard = ({ image, title }) => {
  return (
    <div
      className="card-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <button className="neon-card-button">Learn More</button>
      </div>
    </div>
  );
};

export const CertificationCard = ({
  image,
  title,
  description,
  completionTime,
  url,
}) => {
  return (
    <div className="certification-card">
      <img src={image} alt="image"></img>
      <div className="certification-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{completionTime}</p>
        <a className="card-button" href={url} target="_blank" rel="noreferrer">
          View Certificate
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completionDate: PropTypes.string,
  url: PropTypes.string,
  demoUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
};

CertificationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completionTime: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
