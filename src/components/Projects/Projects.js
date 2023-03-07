import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Siamese from "../../Assets/Projects/Siamese.png";
import BMWPHD from "../../Assets/Projects/BMWPHD.png";
import bethanyWeb from "../../Assets/Projects/bethanyWeb.png";
import bethanyAPP from "../../Assets/Projects/BethanyAPP.png";

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
              imgPath={BMWPHD}
              isBlog={false}
              title="BMW Performance Horse"
              description="I built the BMW Quarter Horses website to showcase our breeding program, which specializes in producing prospects for the reining and reined cowhorse disciplines. Our focus is on breeding horses with exceptional pedigree, conformation, a good mind, and soundness, and we firmly believe in the power of our mares to produce top-quality foals."
              ghLink="https://github.com/Pikago-hub/BMWPHD-FE"
              demoLink="http://www.bmwphd.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bethanyWeb}
              isBlog={false}
              title="Bethany Offical Website"
              description="Welcome to the official website of Bethany Restaurant, built using Vue and Sanity technologies to provide a modern and intuitive user experience. Our website showcases our menu, location, hours of operation, and other important information about our restaurant."
              ghLink="https://github.com/Pikago-hub/bethanycafeFE/tree/master"
              demoLink="https://www.arlingtonbethany.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bethanyAPP}
              isBlog={false}
              title="Bethany Online Order App"
              description="Introducing the Bethany Restaurant online order app, built with React-Native technology for a streamlined and user-friendly experience. Our app allows you to easily browse our menu, customize your order, and have your food ready for pick-up or delivery with just a few taps on your phone. Enjoy a fast and convenient way to satisfy your cravings with the Bethany Restaurant online order app. Demo requires Expo app on your phone"
              ghLink="https://github.com/XyricTech/Bethany-App"
              demoLink="exp://u.expo.dev/update/fb561ef6-779d-46cb-b7bb-63dfc60c7351"
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
