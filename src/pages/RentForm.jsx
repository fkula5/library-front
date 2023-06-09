import { Container } from "react-bootstrap";
import Footer from "../components/footer/Footer";
import FormRent from "../components/form/FormRent";
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
                <FormRent />
            </Container>
            <Footer />
        </div>
    );
}
