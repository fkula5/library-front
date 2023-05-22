import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTransactionForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [transactionData, setTransactionData] = useState({});
    const [books, setBooks] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/transactions/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setTransactionData(data);
                setTransactionData((prevTransactionData) => ({
                    ...prevTransactionData,
                    personId: prevTransactionData.person.id,
                    bookId: prevTransactionData.book.id,
                }));
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/api/books/available")
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error) => {
                console.error("Error:", error);
            });

        fetch("http://localhost:8080/api/people")
            .then((response) => response.json())
            .then((data) => setPeople(data))
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransactionData((prevTransactionData) => ({
            ...prevTransactionData,
            [name]: value,
        }));
        console.log(transactionData);
    };

    const handlePersonSelection = (e) => {
        const selectedPersonId = e.target.value;

        setTransactionData((prevTransactionData) => ({
            ...prevTransactionData,
            personId: selectedPersonId,
        }));
        console.log(transactionData);
    };

    const handleBookSelection = (e) => {
        const selectedBookId = e.target.value;

        setTransactionData((prevTransactionData) => ({
            ...prevTransactionData,
            bookId: selectedBookId,
        }));
        console.log(transactionData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/api/transactions/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(transactionData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Transaction updated successfully");
                    navigate("/transactions");
                } else {
                    console.error("Error updating Transaction");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    if (!transactionData) {
        return <div>Loading...</div>;
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBookId">
                <Form.Label>Book</Form.Label>
                <Form.Control
                    as="select"
                    name="bookId"
                    value={transactionData.bookId}
                    onChange={handleBookSelection}
                >
                    {books.map((book) => (
                        <option key={book.id} value={book.id}>
                            {book.title}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPersonId">
                <Form.Label>Person</Form.Label>
                <Form.Control
                    as="select"
                    name="personId"
                    value={transactionData.personId}
                    onChange={handlePersonSelection}
                >
                    {people.map((person) => (
                        <option key={person.id} value={person.id}>
                            {person.firstName} {person.secondName}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formCheckoutDate">
                <Form.Label>Checkout Date</Form.Label>
                <Form.Control
                    type="date"
                    value={transactionData.checkoutDate}
                    name="checkoutDate"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="date"
                    value={transactionData.dueDate}
                    name="dueDate"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formReturnDate">
                <Form.Label>Return Date</Form.Label>
                <Form.Control
                    type="date"
                    value={transactionData.returnDate}
                    name="returnDate"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Transaction
            </Button>
        </Form>
    );
};

export default UpdateTransactionForm;
