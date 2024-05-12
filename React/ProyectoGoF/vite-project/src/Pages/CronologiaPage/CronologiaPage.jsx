import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CronologiaPage.scss";
import age0 from "../../img/Age0.svg";
import arrow from "../../img/Vector.svg";

export default function CronologiaPage() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");

      setCharacters(data);
    };
    getCharacters();
  }, []);

  characters.sort((a, b) => a.age - b.age);

  return (
    <div className="mainContainer">
      <div className="contenedor">
        <div className="counter">
          <img src={age0} />
        </div>
        <div className="arrow">
          <img src={arrow} />
        </div>
        <div className="db-barra"></div>
      </div>
      <div className="db-crono">
        {characters.map((character, index) => (
          <div
            className={
              index % 2 === 0
                ? "characters-cronologia-par"
                : "characters-cronologia-impar"
            }
            key={index}
          >
            <h3>{character.age}</h3>
            <h5>{character.name}</h5>
            <img
              src={"http://localhost:3000/" + character.image}
              alt={character.name}
            />
          </div>
        ))}
      </div>
      <div className="db-barra"></div>
    </div>
  );
}
