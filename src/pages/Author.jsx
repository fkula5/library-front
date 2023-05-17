import { Container, Card, Button } from "react-bootstrap";
import Navigation from "../components/nav/Navigation";
import Footer from "../components/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

const Author = () => {
    const [author, setAuthor] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    async function fetchData() {
        try {
            const response = await fetch(
                `http://127.0.0.1:8080/api/authors/${id}`
            );

            setAuthor(await response.json());
        } catch (error) {
            console.error(error);
        }
    }

    const deleteAuthor = (authorId) => {
        fetch(`http://127.0.0.1:8080/api/authors/${authorId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Author deleted successfully");
                    navigate("/authors");
                } else {
                    console.error("You can't delete this author! ");
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
                            {author.firstName} {author.secondName}
                        </Card.Title>
                        <Card.Text>
                            <strong>Country:</strong> {author.country}
                        </Card.Text>
                        <LinkContainer
                            to={`/updateAuthor/${id}`}
                            className="me-2"
                        >
                            <Button>Update</Button>
                        </LinkContainer>
                        <Button onClick={() => deleteAuthor(id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </div>
    );
};

export default Author;
