import ArtikelList from "../components/ArtikelList";
import { useEffect, useState } from "react";
import axios from "axios";

const ArtikelListPage = () => {
  const [artikel, setArtikel] = useState([]);

  const getArtikel = () => {
    axios
      .get("api/artikel")
      .then((data) => {
        setArtikel(data.data.artikelFromDB);
        console.log("data was accesed sucesfully");
      })
      .catch((err) =>
        console.log("Problem getting the artikel from database" + err)
      );
  };

  useEffect(() => {
    getArtikel();
  }, []);

  return (
    <>
      <h1>Articles</h1>
      <ArtikelList artikel={artikel} />
    </>
  );
};

export default ArtikelListPage;
