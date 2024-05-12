import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };
  traducir();

  return (
    <header className="nav-container">
      <nav className="nav-link">
        <NavLink to="personajes">{t("NAV.PERSONAJES")}</NavLink>
        <NavLink to="casas">{t("NAV.CASAS")}</NavLink>
        <NavLink to="cronologia">{t("NAV.CRONOLOGIA")}</NavLink>
      </nav>
    </header>
  );
}
