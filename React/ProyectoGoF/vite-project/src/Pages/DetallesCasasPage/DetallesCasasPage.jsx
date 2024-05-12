import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./DetallesCasasPage.scss";
import { useTranslation } from "react-i18next";
import back from "../../img/BackArrow.svg";

export default function DetallesCasasPage() {
  const { id } = useParams();

  const [casa, setCasa] = useState({});

  useEffect(() => {
    const getCasa = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/houses/" + id);
        setCasa(data);
      } catch (error) {
        console.error("Error al obtener la casa:", error);
      }
    };
    getCasa();
  }, []);

  const { t, i18n } = useTranslation();
  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };
  traducir();

  return (
    <div>
      <div>
        <NavLink className="backBtn" to={"/casas"}>
          <img src={back} />
          {t("DETAIL_HOUSE.BACKBTN")}
        </NavLink>
      </div>
      <div className="detalle-casa">
        <div className="detalle-casa-main">
          <img src={"http://localhost:3000" + casa.image} alt={casa.name} />
          <h2>{casa.name}</h2>
        </div>
        <div className="info-casa">
          <section>
            <h2>{t("DETAIL_HOUSE.SETTLEMENT")}</h2>
            {typeof casa.settlement === "string" ? (
              <p>{casa.settlement}</p>
            ) : (
              <p>{t("DETAIL_HOUSE.UNKNOWN")}</p>
            )}
          </section>

          <section>
            <h2>{t("DETAIL_HOUSE.REGION")}</h2>
            {typeof casa.region === "string" ? (
              <p>{casa.region}</p>
            ) : (
              <p>{t("DETAIL_HOUSE.UNKNOWN")}</p>
            )}
          </section>

          <section>
            <h2>{t("DETAIL_HOUSE.ALLIANCES")}</h2>
            {Array.isArray(casa.alliances) ? (
              <ul>
                {casa.alliances.map((ally, index) => (
                  <li key={index}>{ally}</li>
                ))}
              </ul>
            ) : (
              <p>{t("DETAIL_HOUSE.UNKNOWN")}</p>
            )}
          </section>

          <section>
            <h2>{t("DETAIL_HOUSE.RELIGIONS")}</h2>
            {Array.isArray(casa.religions) ? (
              <ul>
                {casa.religions.map((religion, index) => (
                  <li key={index}>{religion}</li>
                ))}
              </ul>
            ) : (
              <p>{t("DETAIL_HOUSE.UNKNOWN")}</p>
            )}
          </section>

          <section>
            <h2>{t("DETAIL_HOUSE.FOUNDATION")}</h2>
            {typeof casa.foundation === "string" ? (
              <p>{casa.foundation}</p>
            ) : (
              <p>{t("DETAIL_HOUSE.UNKNOWN")}</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
