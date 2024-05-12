import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
