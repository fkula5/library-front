import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function DynamicTable({ data }) {
    // Pobranie nazw pól z pierwszego obiektu w danych JSON
    const columnNames = data.length > 0 ? Object.keys(data[0]) : [];
    return (
        <Container style={{ flex: "1" }}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {columnNames.map((columnName) => (
                            <th key={columnName}>{columnName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowData, index) => (
                        <tr key={index}>
                            {columnNames.map((columnName) => (
                                <td key={columnName}>
                                    <Link to="/books/1">
                                        {rowData[columnName]}
                                    </Link>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default DynamicTable;
