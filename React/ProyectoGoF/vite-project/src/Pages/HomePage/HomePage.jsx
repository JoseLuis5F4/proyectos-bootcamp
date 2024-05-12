import React from "react";
import "./HomePage.scss";
import Loading from "../../components/Loading/Loading";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };
  traducir();
  return (
    <div className="homeBG">
      <div className="titleHP">
        <h1>{t("HOME_PAGE.GAME-OF")}</h1>
        <h1>{t("HOME_PAGE.THRONES")}</h1>
      </div>
    </div>
  );
}
