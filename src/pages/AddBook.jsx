import { Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import AddBookForm from "../components/form/add/AddBookForm";
import Navigation from "../components/nav/Navigation";

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
                <AddBookForm />
            </Container>
            <Footer />
        </div>
    );
}
