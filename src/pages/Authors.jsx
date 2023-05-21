import { Button, Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Navigation from "../components/nav/Navigation";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import AuthorTable from "../components/table/AuthorsTable";

export default function Authors() {
    const [authors, setAuthors] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:8080/api/authors");

            setAuthors(await response.json());
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
                <h2 className="my-4">All authors</h2>
                <LinkContainer to="/addAuthor">
                    <Button>Add new author</Button>
                </LinkContainer>
            </Container>
            <Container style={{ flex: 1 }} className="my-4">
                <AuthorTable authors={authors} />
            </Container>
            <Footer />
        </div>
    );
}
