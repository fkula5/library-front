import { Container } from "react-bootstrap";
import Navigation from "../components/nav/Navigation";
import Footer from "../components/footer/Footer";

const Book = ({ id }) => {
    const book = {
        id: 1,
        title: "Książka 1",
        author: "Autor 1",
        isbn: "123456789",
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Navigation />
            <Container style={{ flex: 1 }}>
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">Author: {book.author}</p>
                        <p className="card-text">ISBN: {book.isbn}</p>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Book;
