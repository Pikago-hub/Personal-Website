import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="purple"> Jerry Wu </span> and I
            am a full stack programmer from
            <span className="purple"> China.</span>
            <br />
            Currently, I am a graduating senior at TCU, where I have been
            studying computer science and engineering.
            <br />
            <br />
            Throughout my time at TCU, I have developed a strong foundation in
            both front-end and back-end development, and have gained experience
            working with a wide range of programming languages and frameworks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching on new Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do good deeds without asking about prospects"{" "}
          </p>
          <footer className="blockquote-footer">Jerry Wu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
