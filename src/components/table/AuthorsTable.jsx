import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AuthorTable = ({ authors }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author) => (
                    <LinkContainer
                        to={`/authors/${author.id}`}
                        key={author.id}
                        style={{ cursor: "pointer" }}
                    >
                        <tr>
                            <td>{author.firstName}</td>
                            <td>{author.secondName}</td>
                            <td>{author.country}</td>
                        </tr>
                    </LinkContainer>
                ))}
            </tbody>
        </Table>
    );
};

export default AuthorTable;
