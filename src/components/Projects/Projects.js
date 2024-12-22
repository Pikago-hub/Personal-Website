import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Siamese from "../../Assets/Projects/Siamese.png";
import redbird from "../../Assets/Projects/redbird.png";
import wowlfg from "../../Assets/Projects/wowlfg.png";

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
              imgPath={Siamese}
              isBlog={false}
              title="Signature Recognition"
              description="Siamese neural network is a class of neural networks that contains one or more identical networks. Most of the time, it’s two parallel neural networks; sometimes, there are three or more. Both networks have the same parameters and weights. So how does it works? We assign data into pairs and set labels for them—same class pairs as 1 and different class pairs as 0. We are computing similarities based on their different or dot products. Then we will be training the network to minimize the distance between samples of the same class and increase the different class distances."
              ghLink="https://github.com/Pikago-hub/NCS-Spring2022-Lab"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wowlfg}
              isBlog={false}
              title="WOW LFG Dashboard"
              description="designed and developed a modern, responsive dashboard landing page for WoWLFG, an online platform for World of Warcraft players seeking group activities. My primary goal was to create an intuitive interface that simplifies navigation and enhances user engagement. Leveraging [mention your tech stack—e.g., React, Vue, or other frameworks], I implemented key features such as streamlined user flows, clear calls-to-action, and visually appealing layouts. The result is a user-friendly landing experience that effectively showcases WoWLFG’s value proposition and encourages players to quickly find or create groups that match their interests."
              demoLink="https://wowlfg.com/#home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={redbird}
              isBlog={false}
              title="Redbird All in One System"
              description="I founded and developed RedBirdTab as an all-in-one system designed to streamline workflows and boost productivity. By integrating multiple features—such as a centralized dashboard, intuitive task management, and real-time collaboration tools—RedBirdTab empowers users to stay organized and focused without juggling multiple platforms. My work involved end-to-end development, from conceptualizing the user experience and interface design to implementing the backend infrastructure and ensuring seamless performance. This holistic approach helped deliver a scalable solution that caters to both individuals and teams, saving time and enabling more efficient project execution."
              demoLink="https://www.redbirdtab.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
