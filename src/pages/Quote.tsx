import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    // Выполняем запрос к API
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/today",
          {
            mode: "cors",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data && data.length > 0) {
          setQuote(data[0].q);
          setAuthor(data[0].a);
        }
      } catch (error) {
        console.error("Ошибка при запросе цитаты:", error);
      }
    };

    fetchQuote();
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только при монтировании компонента

  return (
    <div>
      <section>
        <Container
          fluid
          className="home-section"
          id="home"
          style={{ height: "1000px" }}
        >
          <h2 style={{ marginTop: "6rem", color: "white" }}>
            Случайная <strong className="yellow">цитата</strong>!
          </h2>
          <Container className="home-content">
            <Row
              style={{
                marginTop: "-5rem",
                padding: "2rem",
                borderRadius: "1rem",
                WebkitBackdropFilter: "blur(10px) saturate(110%)",
                backgroundColor: "rgba(255,255,255,.02)",
                backdropFilter: "blur(10px) saturate(110%)",
              }}
            >
              <blockquote>
                <p>"{quote}"</p>
                <footer>
                  <em>— {author}</em>
                </footer>
              </blockquote>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
};

export default Quote;
