import { Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Navigation from "../components/nav/Navigation";
import AddTransactionForm from "../components/form/add/AddTransactionForm";

export default function BookForm() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Navigation />
            <Container style={{ flex: 1 }} className="my-4">
                <AddTransactionForm />
            </Container>
            <Footer />
        </div>
    );
}
