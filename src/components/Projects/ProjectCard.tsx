import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

type ProjectCardProps = {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgPath,
  title,
  description,
  ghLink,
}) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <Card.Img
        variant="top"
        src={imgPath}
        alt="card-img"
        style={{
          height: "200px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
          {description}
        </Card.Text>
        <Button
          variant="primary"
          href={ghLink}
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "flex-end",
            textAlign: "center",
            position: "relative",
            bottom: "0px",
          }}
        >
          <BsGithub /> &nbsp; GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
