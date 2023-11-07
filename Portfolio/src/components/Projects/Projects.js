import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bonetto from '../../Assets/Projects/ProjectBonetto.png';
import apirest from '../../Assets/Projects/ProjectApirest.png';
import airbnb from '../../Assets/Projects/ProjectAirbnb.png';


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bonetto}
              isBlog={false}
              title="Bonetto"
              description="Page for a company called bonetto which is in charge of sales and production, the company solves the problem of communication between client, seller and production, technologies used are MERN stack."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apirest}
              isBlog={false}
              title="Api rest with nodejs"
              description="Rest API created for music where you will have the tracks, users and stored data such as artists, albums and the corresponding covers and Nodejs and Express technologies were used"
              ghLink="https://github.com/Kevinmunoz44/Proyecto-Nodejs"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Clone Airbnb"
              description="Airbnb clone where the common of these pages is made to rent rooms or homes, the technologies used are the MERN stack"
              ghLink="https://github.com/Kevinmunoz44/Clone-Airbnb-with-MERN"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
