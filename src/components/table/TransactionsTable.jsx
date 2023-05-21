import { Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const TransactionsTable = ({ transactions }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Book Title</th>
                    <th>Person Name</th>
                    <th>Checkout Date</th>
                    <th>Due Date</th>
                    <th>Return Date</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <LinkContainer
                        to={`/transactions/${transaction.id}`}
                        key={transaction.id}
                    >
                        <tr>
                            <td>{transaction.book.title}</td>
                            <td>
                                {transaction.person.firstName}{" "}
                                {transaction.person.secondName}
                            </td>
                            <td>{transaction.checkoutDate}</td>
                            <td>{transaction.dueDate}</td>
                            <td>{transaction.returnDate}</td>
                        </tr>
                    </LinkContainer>
                ))}
            </tbody>
        </Table>
    );
};

export default TransactionsTable;
