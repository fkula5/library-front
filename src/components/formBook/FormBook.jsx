import { useState } from "react";
import { Container } from "react-bootstrap";

const FormBook = ({ onAddBook }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, isbn };
        onAddBook(newBook);
        setTitle("");
        setAuthor("");
        setIsbn("");
    };

    return (
        <Container style={{ flex: 1 }}>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="form-group my-4">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="isbn">ISBN</label>
                    <input
                        type="text"
                        className="form-control"
                        id="isbn"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Book
                </button>
            </form>
        </Container>
    );
};

export default FormBook;
