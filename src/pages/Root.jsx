import { Button, Container } from "react-bootstrap";
import DynamicTable from "../components/dynamicTable/DynamicTable";
import Footer from "../components/footer/Footer";
import Navigation from "../components/nav/Navigation";
import { LinkContainer } from "react-router-bootstrap";

export default function Root() {
    const data = [
        { id: 1, title: "Książka 1", author: "Autor 1" },
        { id: 2, title: "Książka 2", author: "Autor 2" },
        { id: 3, title: "Książka 3", author: "Autor 3" },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Navigation />
            <Container className="d-flex justify-content-between align-items-center">
                <h2 className="my-4">Available books</h2>
                <LinkContainer to="/rentForm">
                    <Button>Rent a book</Button>
                </LinkContainer>
            </Container>
            <DynamicTable data={data} />
            <Footer />
        </div>
    );
}
