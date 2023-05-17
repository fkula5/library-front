import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PeopleTable = ({ people }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {people.map((people) => (
                    <LinkContainer
                        to={`/people/${people.id}`}
                        key={people.id}
                        style={{ cursor: "pointer" }}
                    >
                        <tr>
                            <td>{people.firstName}</td>
                            <td>{people.secondName}</td>
                        </tr>
                    </LinkContainer>
                ))}
            </tbody>
        </Table>
    );
};

export default PeopleTable;
