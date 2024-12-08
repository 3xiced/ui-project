import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";

const Skillset = () => {
  const [scrollCount, setScrollCount] = useState(0); // Счётчик прокруток
  const [isFlipped, setIsFlipped] = useState(false); // Флаг переворота страницы

  // Функция для проверки достижения конца страницы
  const handleScroll = () => {
    const scrollTop = window.scrollY; // Текущая прокрутка
    const windowHeight = window.innerHeight; // Высота видимой области
    const fullHeight = document.documentElement.scrollHeight; // Полная высота страницы

    if (scrollTop + windowHeight >= fullHeight - 10) {
      // Если достигнут конец страницы
      setScrollCount((prev) => prev + 1);
    }
  };

  // Эффект для установки обработчика прокрутки
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Удаление обработчика при размонтировании
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Эффект для переворота страницы
  useEffect(() => {
    if (scrollCount >= 10) {
      setIsFlipped(true);
      setTimeout(() => {
        setIsFlipped(false); // Возвращаем страницу в нормальное состояние через 10 секунд
        setScrollCount(0); // Сбрасываем счётчик
      }, 10000);
    }
  }, [scrollCount]);

  return (
    <Container
      fluid
      className="home-section"
      style={{
        transform: isFlipped ? "rotateX(180deg)" : "rotateX(0deg)",
        transition: "transform 0.8s ease-in-out",
        minHeight: "100vh",
        backgroundColor: isFlipped ? "#333" : "#fff",
        color: isFlipped ? "#fff" : "#000",
      }}
    >
      <Container style={{ marginTop: "4rem" }}>
        <h1 className="project-heading">
          Стек <strong className="yellow">технологий</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Программы</strong> и утилиты
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
};

export default Skillset;
