import { Button, Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Navigation from "../components/nav/Navigation";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import AuthorTable from "../components/table/AuthorsTable";
import PeopleTable from "../components/table/PeopleTable";

export default function People() {
    const [people, setPeople] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch("http://127.0.0.1:8080/api/people");

            setPeople(await response.json());
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
                <h2 className="my-4">All people</h2>
                <LinkContainer to="/addPerson">
                    <Button>Add new person</Button>
                </LinkContainer>
            </Container>
            <Container style={{ flex: 1 }} className="my-4">
                <PeopleTable people={people} />
            </Container>
            <Footer />
        </div>
    );
}
