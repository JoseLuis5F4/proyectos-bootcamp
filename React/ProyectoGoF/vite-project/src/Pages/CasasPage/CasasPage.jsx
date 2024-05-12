import axios from "axios";
import React, { useEffect, useState } from "react";
import GalleryHouses from "../../components/GalleryHouses/GalleryHouses";

export default function CasasPage() {
  const [houses, setHouses] = useState([]);
  console.log(houses);

  useEffect(() => {
    const getHouses = async () => {
      const { data } = await axios("http://localhost:3000/houses");
      setHouses(data);
    };
    getHouses();
  }, []);
  return (
    <div>
      <GalleryHouses list={houses} />
    </div>
  );
}
