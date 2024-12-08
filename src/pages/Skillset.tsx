import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";

const Skillset: React.FC = () => {
  const [scrollCount, setScrollCount] = useState<number>(0); // Счётчик прокруток
  const [isFlipped, setIsFlipped] = useState<boolean>(false); // Флаг переворота страницы

  // Функция для проверки достижения конца страницы
  const handleScroll = (): void => {
    const scrollTop: number = window.scrollY; // Текущая прокрутка
    const windowHeight: number = window.innerHeight; // Высота видимой области
    const fullHeight: number = document.documentElement.scrollHeight; // Полная высота страницы

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
      const timer = setTimeout(() => {
        setIsFlipped(false); // Возвращаем страницу в нормальное состояние через 10 секунд
        setScrollCount(0); // Сбрасываем счётчик
      }, 10000);

      return () => clearTimeout(timer); // Очистка таймера при размонтировании
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
