import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm the founder of{" "}
              <i>
                <b className="purple">Xyric Tech LLC</b>
              </i>
              , and I'm passionate about using technology to make a positive
              impact on society. My experience as an entrepreneur has equipped
              me with the skills necessary to launch and grow successful
              startups. I'm skilled at identifying new opportunities, developing
              strategies, and building strong teams that are capable of
              achieving great things.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              Alongside my work in entrepreneurship, I'm deeply involved in
              &nbsp;
              <i>
                <b className="purple">AI research. </b>{" "}
              </i>{" "}
              I'm committed to exploring new ways to apply AI to real-world
              problems and to developing innovative solutions that can make a
              difference in the world.
              <br />
              <br />
              I'm an exceptional leader and innovator who is dedicated to using
              technology to create a better future. My expertise in{" "}
              <i>
                <b className="purple"> entrepreneurship</b>
              </i>
              &nbsp; and
              <i>
                <b className="purple"> AI research </b>
              </i>
              make me a valuable asset to any team or organization, and my
              passion for making a difference is sure to inspire others to
              pursue their own goals and aspirations.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src="https://github.com/pikago-hub.png"
                className="img-fluid rounded-circle"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple"> connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pikago-hub"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/zhaoyuWu8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zhaoyu-jerry-wu-796890210/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jerry.zy.wu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
