import { Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import AddAuthorForm from "../components/form/add/AddAuthorForm";
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
                <AddAuthorForm />
            </Container>
            <Footer />
        </div>
    );
}
