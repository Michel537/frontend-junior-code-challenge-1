import Table from "react-bootstrap/Table";
import { Spinner } from "react-bootstrap";

const ArtikelList = ({ artikel }) => {
 

  return (
    <>
    <br />
      {!artikel ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <h1>Artikel</h1>
          <Table striped bordered hover>
            <thead>
              <tr>              
                <th>Hauptartikelnr</th>
                <th>Artikelname</th>
                <th>Hersteller</th>
                <th>Beschreibung</th>
                <th>Materialangaben</th>
                <th>Geschlecht</th>
                <th>Produktart</th>
                <th>Ärmel</th>
                <th>Bein</th>
                <th>Kragen</th>
                <th>Herstellung</th>
                <th>Taschenart</th>
                <th>Grammatur</th>
                <th>Material</th>
                <th>Ursprungsland</th>
                <th>Bildname</th>
              </tr>
            </thead>
            <tbody>
              <>
                {artikel.map((artikel) => (
                  <>
                    <tr>
                      <td>{artikel.Hauptartikelnr}</td>
                      <td>{artikel.Artikelname}</td>
                      <td>{artikel.Hersteller} </td>
                      <td>{artikel.Beschreibung} </td>
                      <td>{artikel.Materialangaben} </td>
                      <td>{artikel.Geschlecht} </td>
                      <td>{artikel.Produktart} </td>
                      <td>{artikel.Ärmel} </td>
                      <td>{artikel.Bein} </td>
                      <td>{artikel.Kragen} </td>
                      <td>{artikel.Herstellung} </td>
                      <td>{artikel.Taschenart} </td>
                      <td>{artikel.Grammatur} </td>
                      <td>{artikel.Material} </td>
                      <td>{artikel.Ursprungsland} </td>
                      <td>{artikel.Bildname} </td>
                    </tr>
                  </>
                ))}
              </>
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ArtikelList;
