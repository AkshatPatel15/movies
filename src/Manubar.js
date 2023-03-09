import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Manubar() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Manubar;
