import React from "react";
import logo from "../../img/home.svg";
import spain from "../../img/spainflag.svg";
import uk from "../../img/ukflag.svg";
import { Link } from "react-router-dom";
import "./HeaderContainer.scss";
import { useTranslation } from "react-i18next";

export default function HeaderContainer() {
  const { t, i18n } = useTranslation();
  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };
  traducir();
  return (
    <div className="HeaderContainer">
      <div className="headerC">
        <Link to="/" style={{ height: 45 }}>
          <img src={logo} alt="homepage" />
        </Link>
        <Link>
          <img
            src={spain}
            onClick={() => traducir("es")}
            alt="spanishLanguage"
          />
        </Link>
        <Link>
          <img src={uk} onClick={() => traducir("en")} alt="englishLanguage" />
        </Link>
      </div>
    </div>
  );
}
