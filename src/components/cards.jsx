import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import "./cards.scss";
import { Stack } from "@mui/material";

export const ProjectCard = ({
  image,
  title,
  description,
  completionDate,
  url,
  demoUrl,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className="card-image"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <button className="neon-card-button" onClick={handleOpen}>
          Learn More
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
          }}
        >
          <Stack spacing={2}>
            <img
              src={image}
              alt="project"
              style={{
                borderBottom: "1px solid #000",
              }}
            />
            <Stack spacing={2} sx={{ p: 2, alignItems: "center" }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  width: "100%",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                sx={{
                  width: "100%",
                }}
              >
                Completion Date: {completionDate}
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                {description}
              </Typography>
              {/* <Button onClick={handleClose}>Close</Button> */}
              <Stack direction="row" spacing={2}>
                {url && (
                  <Button variant="text" href={url} target="_blank">
                    View Code
                  </Button>
                )}
                {demoUrl && (
                  <Button variant="outlined" href={demoUrl} target="_blank">
                    Visit Website
                  </Button>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Modal>
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
