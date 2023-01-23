import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (

    <Navbar expand="lg" bg="light">
      <Container fluid>     
        <Navbar.Brand href="#home">UDG Tech Challange</Navbar.Brand>   
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">          
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/artikel">Artikel</Nav.Link>
              <Nav.Link href="/create">Create Artikel</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>              
            </Nav>
            </Navbar.Collapse>
     </Container>
    </Navbar>

  
  );
};

export default NavBar;
