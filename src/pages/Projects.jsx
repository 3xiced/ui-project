import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import malw from "../assets/projects/malw.png";
import rti from "../assets/projects/rti.jpg";
import license from "../assets/projects/license.jpg";
import chess from "../assets/projects/chess.jpg";

const Projects = () => {
  const [showFooterText, setShowFooterText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50; // небольшой отступ
      setShowFooterText(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className="home-section">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malw}
              isBlog={false}
              title="Simple Anti-malware"
              description="Простой антивирус, реализованный на языке C++ с использованием фреймворка Dear IMGUI и системных вызовов. Осуществляет базовый функционал по поиску вредоносных файлов с использованием метода сигнатурного поиска. Глубоко интегрирован в Систему с помощью системных вызовов и функционала служб."
              ghLink="https://github.com/3xiced/simple-antimalware"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rti}
              isBlog={false}
              title="RTI Lib"
              description="Библиотека, реализованная на языке C++ стандарта C++ 20 с использованием CMake для осуществления возможности запуска любого приложения в Системе от имени TrustedInstaller. Предназначена для использования в любых программах на языке C++. Является аналогом такого же функционала с языка C#."
              ghLink="https://github.com/3xiced/rti-lib"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={license}
              isBlog={false}
              title="License Manager"
              description="Лицензионный менеджер, реализованный на двух языках - Python и C++ - и состоящий из двух ключевых компонентов - бекенда и клиентской библиотеки соответственно. Бекенд является сервисом хранения и обработки всех приобретенных лицензий, а также всех устройств, пользвующихся этими лицензиями. Библиотека предназначена для интеграции в любое C++ и C# приложение для защиты."
              ghLink="https://github.com/3xiced/irpo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess Tracker"
              description="Библиотека, написанная на языке C++, предназначенная для отслеживания шахматных фигур на физической и виртуальной досках, а также предоставляющая методы для их управления. Библиотека позволяет управлять физической шахматной доской при соответствующей интеграции. Библиотека осуществляет полный контроль правил."
              ghLink="https://github.com/3xiced/chess-tracker"
            />
          </Col>
        </Row>
        <h2 className={`footer-text ${showFooterText ? "visible" : ""}`}>
          Наибольшая часть моих проектов являются проприетарными и не могут быть
          представлены на GitHub! ☹️
        </h2>
      </Container>
    </Container>
  );
};

export default Projects;
