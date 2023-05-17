import { Button, Card, Container } from "react-bootstrap";
import Navigation from "../components/nav/Navigation";
import Footer from "../components/footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

const Book = () => {
    const { id } = useParams();
    const [book, setBooks] = useState(null);
    const navigate = useNavigate();

    async function fetchData() {
        try {
            const response = await fetch(
                `http://127.0.0.1:8080/api/books/${id}`
            );

            setBooks(await response.json());
        } catch (error) {
            console.error(error);
        }
    }

    const deleteBook = (bookId) => {
        fetch(`http://127.0.0.1:8080/api/books/${bookId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Book deleted successfully");
                    navigate("/books");
                } else {
                    console.error("You can't delete this book!");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!book) {
        return <div>Loading...</div>;
    }

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
                        <Card.Title>{book.title}</Card.Title>
                        <strong>Authors:</strong>
                        <ul>
                            {book.authors.map((author) => (
                                <li key={author.id}>
                                    <Link to={`/authors/${author.id}`}>
                                        {author.firstName} {author.secondName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Card.Text>
                            <strong>ISBN:</strong> {book.isbn}
                        </Card.Text>
                        <Card.Text>
                            <strong>Publication Year: </strong>
                            {book.publishedDate}
                        </Card.Text>
                        <LinkContainer
                            to={`/updateBook/${id}`}
                            className="me-2"
                        >
                            <Button>Update</Button>
                        </LinkContainer>
                        <Button onClick={() => deleteBook(id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </div>
    );
};

export default Book;
