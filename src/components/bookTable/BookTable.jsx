import { Container, Table } from "react-bootstrap";

function BooksTable() {
    const books = [
        { id: 1, title: "Książka 1", author: "Autor 1" },
        { id: 2, title: "Książka 2", author: "Autor 2" },
        { id: 3, title: "Książka 3", author: "Autor 3" },
    ];

    return (
        <Container className="mt-4">
            <h2>Aktualnie dostępne książki</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tytuł</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default BooksTable;
