import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>Library-Java</Navbar.Brand>
                </Link>
                <Nav>
                    <LinkContainer to={"/"}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/books"}>
                        <Nav.Link>Books</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/authors"}>
                        <Nav.Link>Authors</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;
