import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const RentForm = ({ onRentBook }) => {
    const [book, setBook] = useState("");
    const [renterName, setRenterName] = useState("");
    const [renterEmail, setRenterEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onRentBook({ book, renterName, renterEmail });
        setBook("");
        setRenterName("");
        setRenterEmail("");
    };

    const books = [
        { id: 1, title: "W pustyni i w puszczy", author: "Henryk Sienkiewicz" },
        { id: 2, title: "Potop", author: "Henryk Sienkiewicz" },
        { id: 3, title: "Pan Tadeusz", author: "Adam Mickiewicz" },
        { id: 4, title: "Zbrodnia i kara", author: "Fiodor Dostojewski" },
        { id: 5, title: "Mistrz i Małgorzata", author: "Michaił Bułhakow" },
    ];

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="my-4">
                    <Form.Label>Książka</Form.Label>
                    <Form.Control
                        as="select"
                        value={book}
                        onChange={(event) => setBook(event.target.value)}
                        required
                    >
                        <option value="">Wybierz książkę</option>
                        {books.map((book) => (
                            <option key={book.id} value={book.id}>
                                {book.title}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group className="my-4">
                    <Form.Label>Imię i nazwisko</Form.Label>
                    <Form.Control
                        type="text"
                        value={renterName}
                        onChange={(event) => setRenterName(event.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="my-4">
                    <Form.Label>Adres e-mail</Form.Label>
                    <Form.Control
                        type="email"
                        value={renterEmail}
                        onChange={(event) => setRenterEmail(event.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Wypożycz książkę
                </Button>
            </Form>
        </Container>
    );
};

export default RentForm;
