import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Stack } from "react-bootstrap";

function CreateArtikel() {
  const [Hauptartikelnr, setHauptartikelnr] = useState("");
  const [Artikelname, setArtikelname] = useState("");
  const [Hersteller, setHersteller] = useState("");
  const [Beschreibung, setBeschreibung] = useState("");
  const [Materialangaben, setMaterialangaben] = useState("");
  const [Geschlecht, setGeschlecht] = useState("");
  const [Produktart, setProduktart] = useState("");
  const [Ärmel, setÄrmel] = useState("");
  const [Bein, setBein] = useState("");
  const [Kragen, setKragen] = useState("");
  const [Herstellung, setHerstellung] = useState("");
  const [Taschenart, setTaschenart] = useState("");
  const [Grammatur, setGrammatur] = useState("");
  const [Material, setMaterial] = useState("");
  const [Ursprungsland, setUrsprungsland] = useState("");
  const [Bildname, setBildname] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArtikel = {
      Hauptartikelnr,
      Artikelname,
      Hersteller,
      Beschreibung,
      Materialangaben,
      Geschlecht,
      Produktart,
      Ärmel,
      Bein,
      Kragen,
      Herstellung,
      Taschenart,
      Grammatur,
      Material,
      Ursprungsland,
      Bildname,
    };

    axios
      .post(`http://localhost:5000/api/artikel`, newArtikel)
      .then((artikel) => {
        console.log("Artikel sucessfully created" + artikel);
      })
      .catch((err) => console.log("Problem creating a new Artikel" + err));
  };

  return (
    <Container>
      <h3>Create an Artikel</h3>
      <Form onSubmit={handleSubmit} id="create-artikel-form">
        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Hauptartikelnr:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Hauptartikelnr-form"
              type="text"
              name="Hauptartikelnr"
              value={Hauptartikelnr}
              placeholder="Here the Hauptartikelnr"
              required
              onChange={(e) => {
                setHauptartikelnr(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Artikelname:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Artikelname-form"
              type="text"
              name="Artikelname"
              value={Artikelname}
              placeholder="Here the Artikelname"
              required
              onChange={(e) => {
                setArtikelname(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Hersteller:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Hersteller-form"
              type="text"
              name="Hersteller"
              value={Hersteller}
              placeholder="Here the Hersteller"
              required
              onChange={(e) => {
                setHersteller(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Beschreibung:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Beschreibung-form"
              type="text"
              name="Beschreibung"
              value={Beschreibung}
              placeholder="Here the Beschreibung"
              required
              onChange={(e) => {
                setBeschreibung(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Materialangaben:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Materialangaben-form"
              type="text"
              name="Materialangaben"
              value={Materialangaben}
              placeholder="Here the Materialangaben"
              required
              onChange={(e) => {
                setMaterialangaben(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Geschlecht:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Geschlecht-form"
              type="text"
              name="Geschlecht"
              value={Geschlecht}
              placeholder="Here the Geschlecht"
              required
              onChange={(e) => {
                setGeschlecht(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Produktart:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Produktart-form"
              type="text"
              name="Produktart"
              value={Produktart}
              placeholder="Here the Produktart"
              required
              onChange={(e) => {
                setProduktart(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Ärmel:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Ärmel-form"
              type="text"
              name="Ärmel"
              value={Ärmel}
              placeholder="Here the Ärmel"
              required
              onChange={(e) => {
                setÄrmel(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Bein:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Bein-form"
              type="text"
              name="Bein"
              value={Bein}
              placeholder="Here the Bein"
              required
              onChange={(e) => {
                setBein(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Kragen:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Kragen-form"
              type="text"
              name="Kragen"
              value={Kragen}
              placeholder="Here the Kragen"
              required
              onChange={(e) => {
                setKragen(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Herstellung:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Herstellung-form"
              type="text"
              name="Herstellung"
              value={Herstellung}
              placeholder="Here the Herstellung"
              required
              onChange={(e) => {
                setHerstellung(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Taschenart:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Taschenart-form"
              type="text"
              name="Taschenart"
              value={Taschenart}
              placeholder="Here the Taschenart"
              required
              onChange={(e) => {
                setTaschenart(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Grammatur:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Grammatur-form"
              type="text"
              name="Grammatur"
              value={Grammatur}
              placeholder="Here the Grammatur"
              required
              onChange={(e) => {
                setGrammatur(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Material:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Material-form"
              type="text"
              name="Material"
              value={Material}
              placeholder="Here the Material"
              required
              onChange={(e) => {
                setMaterial(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Ursprungsland:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Ursprungsland-form"
              type="text"
              name="Ursprungsland"
              value={Ursprungsland}
              placeholder="Here the Ursprungsland"
              required
              onChange={(e) => {
                setUrsprungsland(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Form.Group className="mb-3">
          <Stack direction="horizontal" gap={2}>
            <Form.Label md={4}>Bildname:</Form.Label>
            <Form.Control
              md={8}
              size="sm"
              id="Bildname-form"
              type="text"
              name="Bildname"
              value={Bildname}
              placeholder="Here the Bildname"
              required
              onChange={(e) => {
                setBildname(e.target.value);
              }}
            />
          </Stack>
        </Form.Group>

        <Button variant="primary" type="submit">
          CreateArtikel
        </Button>
        <Button onClick={ () => navigate("/artikel")} variant="primary">ToArtikel</Button>
      </Form>
    </Container>
  );
}

export default CreateArtikel;
