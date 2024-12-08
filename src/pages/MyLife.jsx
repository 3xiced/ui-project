import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import conferenseImage from "../assets/conference.jpg";
import summer from "../assets/summer.png";
import litvin from "../assets/StickersLitvin_006.webp";
import Card from "react-animated-3d-card";

const MyLife = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const handleCardClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 5) {
        setShowImage(true);
        setTimeout(() => {
          setShowImage(false);
          setClickCount(0); // Сбрасываем счётчик
        }, 5000);
      }
      return newCount;
    });
  };

  return (
    <Container
      fluid
      className="home-section"
      id="home"
      style={{ padding: "60px" }}
    >
      <div style={{ marginTop: 60 }} className="story-text">
        <h1 style={{ textAlign: "center" }}>
          Моя <strong className="yellow">жизнь</strong>
        </h1>
        <Row
          style={{
            marginBottom: "4rem",
            marginLeft: "4rem",
            marginRight: "4rem",
            marginTop: "4rem",
            alignItems: "center",
          }}
        >
          <Col
            md={6}
            style={{
              padding: "2rem",
              borderRadius: "1rem",
              WebkitBackdropFilter: "blur(10px) saturate(110%)",
              backgroundColor: "rgba(255,255,255,.02)",
              backdropFilter: "blur(10px) saturate(110%)",
            }}
          >
            <h2>Поездка в Геленджик</h2>
            <p>
              Я отправился в Геленджик{" "}
              <strong className="main-name">летом</strong>, чтобы отдохнуть и
              восстановить силы после долгого рабочего дня. Путешествие заняло у
              меня неделю, и я провел{" "}
              <strong className="main-name">
                наслаждаясь природой и отдыхом
              </strong>
              !
            </p>
            <p>
              В Геленджике я провел много времени на пляже, ныряя и плавая. Море
              было чистое и прозрачное, и я чувствовал себя как дома. Я также
              посетил несколько достопримечательностей города, таких как{" "}
              <strong className="main-name">музей</strong> и{" "}
              <strong className="main-name">парк</strong>.
            </p>
            <p>
              В свободное время я посещал различные{" "}
              <strong className="main-name">мероприятия</strong> и{" "}
              <strong className="main-name">концерты</strong>, чтобы насладиться
              культурой и музыкой. Я также посетил несколько ресторанов и
              попробовал местные блюда, которые были очень вкусными и
              ароматными.
            </p>
            <p>
              В целом, моя поездка в{" "}
              <strong className="main-name">Геленджик</strong> была очень
              успешной и позволила мне полностью отдохнуть и восстановить свой
              дух. Я очень <strong className="main-name">рекомендую</strong>{" "}
              этот город всем, кто ищет место для отдыха и восстановления.
            </p>
          </Col>
          <Col md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  backgroundColor: "black",
                  cursor: "pointer",
                }}
                onClick={handleCardClick}
              >
                <img src={summer} style={{ width: 400 }} />
              </Card>
            </div>
          </Col>
        </Row>
        <Row
          style={{
            marginBottom: "4rem",
            marginLeft: "4rem",
            marginRight: "4rem",
            marginTop: "4rem",
            alignItems: "center",
          }}
        >
          <Col md={6}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  backgroundColor: "black",
                  cursor: "pointer",
                }}
              >
                <img src={conferenseImage} style={{ width: 400 }} />
              </Card>
            </div>
          </Col>
          <Col
            md={6}
            style={{
              padding: "2rem",
              borderRadius: "1rem",
              WebkitBackdropFilter: "blur(10px) saturate(110%)",
              backgroundColor: "rgba(255,255,255,.02)",
              backdropFilter: "blur(10px) saturate(110%)",
            }}
          >
            <h2>Конференция Highload++ 2024</h2>
            <p>
              Я посетил конференцию{" "}
              <strong className="main-name">Highload++ 2024</strong>, чтобы
              расширить свои знания в области высоконагруженных систем и
              технологий. Это было очень познавательное и вдохновляющее событие!
            </p>
            <p>
              На конференции я узнал много нового, слушая доклады экспертов.
              Темы были разнообразными, начиная от{" "}
              <strong className="main-name">
                архитектуры распределенных систем
              </strong>{" "}
              до <strong className="main-name">оптимизации баз данных</strong>.
              Каждый доклад был ценным и полезным для моей работы.
            </p>
            <p>
              Кроме того, конференция оставила яркие воспоминания благодаря
              множеству подарков и мерча, которые я получил от различных
              компаний. Это были{" "}
              <strong className="main-name">брендированные аксессуары</strong>,{" "}
              <strong className="main-name">футболки</strong> и даже{" "}
              <strong className="main-name">гаджеты</strong>!
            </p>
            <p>
              В целом, посещение{" "}
              <strong className="main-name">Highload++ 2024</strong> было
              замечательным опытом. Я вернулся с новыми идеями, знаниями и
              вдохновением для дальнейшей работы. Рекомендую эту конференцию
              всем, кто интересуется высоконагруженными системами!
            </p>
          </Col>
        </Row>
        {showImage && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
              animation: "fadeInOut 5s ease-in-out",
            }}
          >
            <img
              src={litvin}
              alt="Summer"
              style={{
                maxWidth: "80%",
                maxHeight: "80%",
                borderRadius: "1rem",
              }}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default MyLife;
