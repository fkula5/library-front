import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddTransactionForm = () => {
    const [formData, setFormData] = useState({
        bookId: "",
        personId: "",
        checkoutDate: "",
        dueDate: "",
        returnDate: "",
    });
    const [books, setBooks] = useState([]);
    const [people, setPeople] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/books")
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
        console.log(name, value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        console.log(formData);
    };

    const handlePersonSelection = (e) => {
        const selectedPersonId = e.target.value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            personId: selectedPersonId,
        }));
        console.log(formData);
    };

    const handleBookSelection = (e) => {
        const selectedBookId = e.target.value;

        setFormData((prevFormData) => ({
            ...prevFormData,
            bookId: selectedBookId,
        }));
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Transaction added succefully", data);
                setFormData({
                    bookId: "",
                    personId: "",
                    checkoutDate: "",
                    dueDate: "",
                    returnDate: "",
                });
                navigate("/transactions");
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="bookId">
                <Form.Label>Book</Form.Label>
                <Form.Control
                    as="select"
                    name="bookId"
                    value={formData.bookId}
                    onChange={handleBookSelection}
                >
                    <option value="">Select a book</option>
                    {books.map((book) => (
                        <option key={book.id} value={book.id}>
                            {book.title}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="personId">
                <Form.Label>Person</Form.Label>
                <Form.Control
                    as="select"
                    name="personId"
                    value={formData.personId}
                    onChange={handlePersonSelection}
                >
                    <option value="">Select a person</option>
                    {people.map((person) => (
                        <option key={person.id} value={person.id}>
                            {person.firstName} {person.secondName}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="checkoutDate">
                <Form.Label>Checkout Date</Form.Label>
                <Form.Control
                    type="date"
                    name="checkoutDate"
                    value={formData.checkoutDate}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="dueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="returnDate">
                <Form.Label>Return Date</Form.Label>
                <Form.Control
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Transaction
            </Button>
        </Form>
    );
};

export default AddTransactionForm;
