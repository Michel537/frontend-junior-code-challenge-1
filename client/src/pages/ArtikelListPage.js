import ArtikelList from "../components/ArtikelList";
import { useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

  const headers = [
    { label: "Hauptartikelnr", key: "Hauptartikelnr" },
    { label: "Artikelname", key: "Artikelname" },
    { label: "Hersteller", key: "Hersteller" },
    { label: "Beschreibung", key: "Beschreibung" },
    { label: "Materialangaben", key: "Materialangaben" },
    { label: "Geschlecht", key: "Geschlecht" },
    { label: "Produktart", key: "Produktart" },
    { label: "Ärmel", key: "Ärmel" },
    { label: "Bein", key: "Bein" },
    { label: "Kragen", key: "Kragen" },
    { label: "Herstellung", key: "Herstellung" },
    { label: "Taschenart", key: "Taschenart" },
    { label: "Grammatur", key: "Grammatur" },
    { label: "Ursprungsland", key: "Ursprungsland" },
    { label: "Bildname", key: "Bildname" },
  ];

  const myStyle = {
    font: "bold 11px Arial",
    textDecoration: "none",
    border: "2px outset #ccc",
    backgroundColor: "#eee",
    color: "#000",
    margin: "5px",
  };

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <h2>Artikel</h2>
          </Col>
          <Col>
            {" "}
            <CSVLink
              style={myStyle}
              data={artikel}
              headers={headers}
              separator={";"}
            >
              Download
            </CSVLink>
          </Col>
        </Row>
      </Container>
      <ArtikelList artikel={artikel} />
    </>
  );
};

export default ArtikelListPage;
