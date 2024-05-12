import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./DetallesPage.scss";
import back from "../../img/BackArrow.svg";
import { useTranslation } from "react-i18next";

export default function DetallesPage() {
  const { id } = useParams();

  const { t, i18n } = useTranslation();
  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };
  traducir();

  const [personaje, setPersonaje] = useState({});
  const [casa, setCasa] = useState([]);

  //-----PERSONAJES

  useEffect(() => {
    const getPersonaje = async () => {
      const { data } = await axios("http://localhost:3000/characters/" + id);
      setPersonaje(data);
      // console.log(data);
    };
    getPersonaje();
  }, []);

  //-----CASAS

  useEffect(() => {
    const getCasa = async () => {
      const { data } = await axios.get("http://localhost:3000/houses");
      setCasa(data);
      // console.log(data);
    };
    getCasa();
  }, []);

  const findHouseByName = (houseName) => {
    return casa.find((casa) => casa.name === houseName);
  };

  const casaPersonaje = findHouseByName(personaje.house);

  return (
    <div>
      <div>
        <NavLink className="backBtn" to={"/personajes"}>
          <img src={back} />
          {t("DETAIL_CHAR.BACKBTN")}
        </NavLink>
      </div>
      <div className="b-detalle-personaje">
        <div className="b-img-name">
          <img
            src={"http://localhost:3000/" + personaje.image}
            alt={personaje.name}
          />
          <h1>{personaje.name}</h1>
          <div className="b-info-dp">
            <section>
              <h2>{t("DETAIL_CHAR.HOUSE")}</h2>
              {casaPersonaje && (
                <img src={"http://localhost:3000" + casaPersonaje.image} />
              )}
            </section>
            <section>
              <h2>{t("DETAIL_CHAR.ALLIANCES")}</h2>
              {personaje.alliances && (
                <ul>
                  {personaje.alliances.map((alianza, index) => (
                    <li key={index}>{alianza}</li>
                  ))}
                </ul>
              )}
            </section>
            <section>
              <h2>{t("DETAIL_CHAR.EPISODES")}</h2>
              {personaje.episodes && (
                <ul>
                  {personaje.episodes.map((episodes, index) => (
                    <li key={index}>{episodes}</li>
                  ))}
                </ul>
              )}
            </section>
            <section>
              <h2>{t("DETAIL_CHAR.PARENTS")}</h2>
              {personaje.parents && (
                <ul>
                  {personaje.parents.map((parents, index) => (
                    <li key={index}>{parents}</li>
                  ))}
                </ul>
              )}
            </section>
            <section>
              <h2>{t("DETAIL_CHAR.SIBLINGS")}</h2>
              {personaje.siblings && (
                <ul>
                  {personaje.siblings.map((siblings, index) => (
                    <li key={index}>{siblings}</li>
                  ))}
                </ul>
              )}
            </section>
            <section>
              <h2>{t("DETAIL_CHAR.TITLES")}</h2>
              {personaje.titles && (
                <ul>
                  {personaje.titles.map((titles, index) => (
                    <li key={index}>{titles}</li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
