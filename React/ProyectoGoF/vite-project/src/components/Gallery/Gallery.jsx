import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import { Link } from "react-router-dom";
import lupa from "../../img/searchImg.svg";
import { useTranslation } from "react-i18next";

export default function Gallery({ list }) {
  const [filtroPersonajes, setFiltroPersonajes] = useState([]);
  const [search, setSearch] = useState("");
  const { t, i18n } = useTranslation();

  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };
  traducir();

  useEffect(() => {
    if (list && list.length) {
      if (search && search !== "") {
        const lista = filterLista(list, search);
        setFiltroPersonajes(lista);
      } else {
        setFiltroPersonajes(list);
      }
    }
  }, [list, search]);

  const filterLista = (lista, value) => {
    return lista.filter((f) =>
      f.name.toUpperCase().includes(value.toUpperCase().trim())
    );
  };

  return (
    <div>
      <div className="buscador">
        <img src={lupa} alt="Search" />
        <input
          type="text"
          placeholder={t("CHARACTER_SEARCH.SEARCH")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="galleryList">
        {filtroPersonajes.map((character, index) => (
          <div className="charCard" key={index}>
            <img
              src={"http://localhost:3000" + character.image}
              alt={character.name}
            />
            <Link className="charName" to={"/personajes/" + character.id}>
              {character.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
