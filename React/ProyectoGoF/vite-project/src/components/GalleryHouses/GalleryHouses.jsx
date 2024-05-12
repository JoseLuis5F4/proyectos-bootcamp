import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GalleryHouses.scss";
import lupa from "../../img/searchImg.svg";
import { useTranslation } from "react-i18next";

export default function GalleryHouses({ list }) {
  const [filtroCasas, setFiltroCasas] = useState([]);
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
        setFiltroCasas(lista);
      } else {
        setFiltroCasas(list);
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
          placeholder={t("HOUSE_SEARCH.SEARCH")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="galleryHousesList">
        {filtroCasas.map((house, index) => (
          <div className="houseCard" key={index}>
            <img src={"http://localhost:3000" + house.image} alt={house.name} />
            <Link className="houseName" to={"/casas/" + house.id}>
              {house.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
