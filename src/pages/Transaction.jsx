import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/nav/Navigation";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "../components/footer/Footer";

const Transaction = () => {
    const [transaction, setTransaction] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    async function fetchData() {
        try {
            const response = await fetch(
                `http://localhost:8080/api/transactions/${id}`
            );
            setTransaction(await response.json());
        } catch (error) {
            console.error(error);
        }
    }

    const deleteTransaction = (transactionId) => {
        fetch(`http://localhost:8080/api/transactions/${transactionId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Transaction deleted successfully");
                    navigate("/transactions");
                } else {
                    console.error("You can't delete this transaction! ");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!transaction) {
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
                        <Card.Title>
                            Transaction ID: {transaction.id}
                        </Card.Title>
                        <Card.Text>
                            <strong>Book Title:</strong>{" "}
                            {transaction.book.title}
                        </Card.Text>
                        <strong>Authors:</strong>
                        <ul>
                            {transaction.book.authors.map((author) => (
                                <li key={author.id}>
                                    {author.firstName} {author.secondName}
                                </li>
                            ))}
                        </ul>
                        <Card.Text>
                            <strong>Person Name:</strong>{" "}
                            {transaction.person.firstName}{" "}
                            {transaction.person.secondName}
                        </Card.Text>
                        <Card.Text>
                            <strong>Checkout Date:</strong>{" "}
                            {transaction.checkoutDate}
                        </Card.Text>
                        <Card.Text>
                            <strong>Due Date:</strong> {transaction.dueDate}
                        </Card.Text>
                        <Card.Text>
                            <strong>Return Date:</strong>{" "}
                            {transaction.returnDate}
                        </Card.Text>
                        <LinkContainer
                            to={`/updateTransaction/${id}`}
                            className="me-2"
                        >
                            <Button>Update</Button>
                        </LinkContainer>
                        <Button onClick={() => deleteTransaction(id)}>
                            Delete
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </div>
    );
};

export default Transaction;
