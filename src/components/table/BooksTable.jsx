import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const BookTable = ({ books }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Authors</th>
                    <th>ISBN</th>
                    <th>Published Date</th>
                    <th>Available</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <LinkContainer
                        key={book.id}
                        to={`/books/${book.id}`}
                        style={{ cursor: "pointer" }}
                    >
                        <tr>
                            <td>{book.title}</td>
                            <td>
                                {book.authors.map((author) => (
                                    <div key={author.id}>
                                        {author.firstName} {author.secondName} (
                                        {author.country})
                                    </div>
                                ))}
                            </td>
                            <td>{book.isbn}</td>
                            <td>{book.publishedDate}</td>
                            <td>{book.available ? "Yes" : "No"}</td>
                        </tr>
                    </LinkContainer>
                ))}
            </tbody>
        </Table>
    );
};

export default BookTable;
