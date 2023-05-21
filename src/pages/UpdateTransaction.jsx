import { Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Navigation from "../components/nav/Navigation";
import UpdateTransactionForm from "../components/form/update/UpdateTransactionForm";

export default function UpdateAuthor() {
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
                <UpdateTransactionForm />
            </Container>
            <Footer />
        </div>
    );
}
