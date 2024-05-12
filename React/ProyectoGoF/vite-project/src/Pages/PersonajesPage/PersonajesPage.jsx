import axios from "axios";
import React, { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import SimpleBar from "simplebar-react";
import { useTranslation } from "react-i18next";

export default function PersonajesPage() {
  const [characters, setCharacters] = useState([]);
  // console.log(characters);

  const { t, i18n } = useTranslation();
  const traducir = (leng) => {
    i18n.changeLanguage(leng);
  };
  traducir();

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");
      // console.log(data);
      // --Igual que--
      // const res = await fetch("http://localhost:3000/characters");
      // const data = await res.json();
      setCharacters(data);
    };
    getCharacters();
  }, []);

  return (
    // <SimpleBar forceVisible="y" autoHide={false} style={{ maxHeight: 700 }}  {/* </SimpleBar> */}>
    <div>
      <Gallery list={characters} />
    </div>
  );
}
