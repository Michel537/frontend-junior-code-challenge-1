import { Image } from "react-bootstrap";
import picture from "../img/picture.jpeg";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const AboutPage = () => {
  return (
    <>
      <br />
      <Container>
        <h1>About Me</h1>
        <Row>
          <Col>
            <Image src={picture} fluid></Image>
          </Col>
          <Col>
            <Container>
            <br />
              <>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/michel-pomares/">
                  https://www.linkedin.com/in/michel-pomares/
                </a>
              </>
              <br />
              <br />
              <br />
              <>
                <h3>Github</h3>
                <a href="https://github.com/Michel537">
                  https://github.com/Michel537
                </a>
              </>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
