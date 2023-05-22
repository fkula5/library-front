import { Button, Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Navigation from "../components/nav/Navigation";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import BookTable from "../components/table/BooksTable";

export default function Root() {
    const [books, setBooks] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch(
                "http://localhost:8080/api/books/available"
            );

            setBooks(await response.json());
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

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
                <LinkContainer to="/addTransaction">
                    <Button>Rent a book</Button>
                </LinkContainer>
            </Container>
            <Container style={{ flex: 1 }} className="my-4">
                <BookTable books={books} />
            </Container>
            <Footer />
        </div>
    );
}
