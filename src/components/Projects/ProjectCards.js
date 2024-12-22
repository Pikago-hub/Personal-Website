import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ height: "380px", overflow: "hidden" }}>
        {" "}
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt="card-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <Card.Body
        style={{ height: "300px", display: "flex", flexDirection: "column" }}
      >
        {" "}
        <div>
          {" "}
          <Card.Title
            style={{ height: "60px", display: "flex", alignItems: "center" }}
          >
            {" "}
            {props.title}
          </Card.Title>
          <Card.Text
            style={{
              height: "180px",
              overflowY: "auto",
              marginBottom: "15px",
              textAlign: "justify",
            }}
          >
            {props.description}
          </Card.Text>
        </div>
        <div style={{ marginTop: "auto" }}>
          {" "}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {"\n"}
          {"\n"}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
