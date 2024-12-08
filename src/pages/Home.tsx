import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "../components/Home/Type";
import ConfettiExplosion from "react-confetti-explosion";

const Home = () => {
  const [showGif, setShowGif] = useState(false);
  const [isExploding, setIsExploding] = React.useState(false);
  const tmt = () => {
    setTimeout(function () {
      setShowGif(false);
      setIsExploding(false);
    }, 8300);
  };
  const handleWinClick = () => {
    setShowGif(true);
    setIsExploding(true);
    tmt();
  };

  return (
    <div>
      {/* <InfinityGauntlet snap={snap} style={{position: "static" }}> */}
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Привет!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    \o
                  </span>
                </h1>

                <h1 className="heading-name">
                  Меня зовут
                  <strong className="main-name">
                    {" "}
                    Разумов Александр Ильич
                  </strong>
                  , а также
                </h1>

                <div
                  onClick={handleWinClick}
                  style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 50,
                    textAlign: "left",
                    cursor: "pointer",
                    border: "solid 2px #1d1f3c",
                    borderRadius: "10px",
                    background: "#040621",
                    fontFamily: "monospace",
                  }}
                >
                  &gt;
                  <Type />
                </div>
              </Col>
              <Col md={5}>
                {isExploding && (
                  <ConfettiExplosion
                    particleCount={600}
                    particleSize={8}
                    duration={10000}
                    colors={["#8e61c5", "#343ea1", "#f7eef4", "#5a41ab"]}
                    width={1920}
                    height={"120vh"}
                    force={0.8}
                    style={{ position: "relative", top: 200, left: 200 }}
                  />
                )}
                {showGif && <div className="hollow-purple">&nbsp;</div>}
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      {/* </InfinityGauntlet> */}
    </div>
  );
};

export default Home;
