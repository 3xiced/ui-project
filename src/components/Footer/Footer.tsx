import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaVk } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

const Footer = () => {
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4">
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/3xiced"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://vk.com/sigma_the_sigma"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="vk"
                >
                  <FaVk />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/ALPHA_KENNY_BODY"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="telegram"
                >
                  <SiTelegram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer