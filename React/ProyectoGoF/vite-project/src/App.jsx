import { useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import PersonajesPage from "./Pages/PersonajesPage/PersonajesPage";
import CasasPage from "./Pages/CasasPage/CasasPage";
import CronologiaPage from "./Pages/CronologiaPage/CronologiaPage";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import DetallesPage from "./Pages/DetallesPage/DetallesPage";
import DetallesCasasPage from "./Pages/DetallesCasasPage/DetallesCasasPage";

function App() {
  // const [characters, setCharacters] = useState([]);

  // const getCharacters = async(page);

  return (
    <>
      <BrowserRouter>
        <HeaderContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personajes" element={<PersonajesPage />} />
          <Route path="/personajes/:id" element={<DetallesPage />} />
          <Route path="/casas" element={<CasasPage />} />
          <Route path="/casas/:id" element={<DetallesCasasPage />} />
          <Route path="/cronologia" element={<CronologiaPage />} />
        </Routes>
        <Header />
      </BrowserRouter>
    </>
  );
}

export default App;
