import { Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import Navigation from "../components/nav/Navigation";
import UpdateAuthorForm from "../components/form/update/UpdateAuthorForm";

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
                <UpdateAuthorForm />
            </Container>
            <Footer />
        </div>
    );
}
