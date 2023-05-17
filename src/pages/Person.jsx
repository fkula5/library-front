import { Container, Card, Button } from "react-bootstrap";
import Navigation from "../components/nav/Navigation";
import Footer from "../components/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

const Author = () => {
    const [person, setPerson] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    async function fetchData() {
        try {
            const response = await fetch(
                `http://127.0.0.1:8080/api/people/${id}`
            );

            setPerson(await response.json());
        } catch (error) {
            console.error(error);
        }
    }

    const deletePerson = (personId) => {
        fetch(`http://127.0.0.1:8080/api/people/${personId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Person deleted successfully");
                    navigate("/people");
                } else {
                    console.error("You can't delete this person! ");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

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
            <Container style={{ flex: 1 }} className="my-4">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {person.firstName} {person.secondName}
                        </Card.Title>
                        <LinkContainer
                            to={`/updatePerson/${id}`}
                            className="me-2"
                        >
                            <Button>Update</Button>
                        </LinkContainer>
                        <Button onClick={() => deletePerson(id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </div>
    );
};

export default Author;
