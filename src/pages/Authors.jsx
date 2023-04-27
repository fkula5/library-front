import { Button, Container } from "react-bootstrap";
import DynamicTable from "../components/dynamicTable/DynamicTable";
import Footer from "../components/footer/Footer";
import Navigation from "../components/nav/Navigation";
import { LinkContainer } from "react-router-bootstrap";

export default function Authors() {
    const authors = [
        { id: 1, name: "J.K. Rowling", nationality: "British" },
        { id: 2, name: "Stephen King", nationality: "American" },
        { id: 3, name: "Agatha Christie", nationality: "British" },
        { id: 4, name: "Haruki Murakami", nationality: "Japanese" },
        { id: 5, name: "Gabriel García Márquez", nationality: "Colombian" },
    ];

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
                <h2 className="my-4">All authors</h2>
                <LinkContainer to="/authorForm">
                    <Button>Add new author</Button>
                </LinkContainer>
            </Container>
            <DynamicTable data={authors} tableTitle={"Authors"} />
            <Footer />
        </div>
    );
}
