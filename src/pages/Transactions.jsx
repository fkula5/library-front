import { Button, Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Navigation from "../components/nav/Navigation";
import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useState } from "react";
import TransactionsTable from "../components/table/TransactionsTable";

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch(
                "http://localhost:8080/api/transactions"
            );

            setTransactions(await response.json());
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Navigation />
            <Container className="d-flex justify-content-between align-items-center">
                <h2 className="my-4">All transactions</h2>
                <LinkContainer to="/addTransaction">
                    <Button>Rent a book</Button>
                </LinkContainer>
            </Container>
            <Container style={{ flex: 1 }} className="my-4">
                <TransactionsTable transactions={transactions} />
            </Container>
            <Footer />
        </div>
    );
}
