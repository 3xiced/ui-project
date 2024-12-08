import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCplusplus,
  SiJava,
  SiCsharp
} from "react-icons/si";
import {
  FaFileWord,
  FaFileExcel
} from "react-icons/fa";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileWord/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
