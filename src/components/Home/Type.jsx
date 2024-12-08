import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Архитектор IdM",
              "Сигма Настоящий",
              "Системный аналитик",
              "Инженер ПО",
              "Nah I'd win",
              "Студент 4 курса"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 30,
          }}
        />
      )
}

export default Type