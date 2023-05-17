import { Form, Button } from "react-bootstrap";

const UpdateTransactionForm = ({ transaction, books, persons, onUpdate }) => {
    const [checkoutDate, setCheckoutDate] = useState(transaction.checkoutDate);
    const [dueDate, setDueDate] = useState(transaction.dueDate);
    const [returnDate, setReturnDate] = useState(transaction.returnDate);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform update action and pass updated values
        onUpdate({
            ...transaction,
            checkoutDate,
            dueDate,
            returnDate,
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBookId">
                <Form.Label>Book</Form.Label>
                <Form.Control as="select" disabled>
                    <option value={transaction.book.id}>
                        {transaction.book.title}
                    </option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formPersonId">
                <Form.Label>Person</Form.Label>
                <Form.Control as="select" disabled>
                    <option value={transaction.person.id}>
                        {transaction.person.firstName}{" "}
                        {transaction.person.secondName}
                    </option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="formCheckoutDate">
                <Form.Label>Checkout Date</Form.Label>
                <Form.Control
                    type="date"
                    value={checkoutDate}
                    onChange={(e) => setCheckoutDate(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formReturnDate">
                <Form.Label>Return Date</Form.Label>
                <Form.Control
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Transaction
            </Button>
        </Form>
    );
};

export default UpdateTransactionForm;
