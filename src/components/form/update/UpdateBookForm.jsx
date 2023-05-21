import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBookForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);
    const [bookData, setBookData] = useState({
        title: "",
        isbn: "",
        authors: [],
        publishedDate: "",
        available: true,
    });
    const [formData, setFormData] = useState({
        title: "",
        isbn: "",
        authorsId: [],
        publishedDate: "",
        available: true,
    });

    useEffect(() => {
        fetch("http://localhost:8080/api/authors")
            .then((response) => response.json())
            .then((data) => {
                setAuthors(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/api/books/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setBookData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookData((prevBookData) => ({
            ...prevBookData,
            [name]: value,
        }));
    };

    const handleAuthorSelection = (e) => {
        const selectedAuthorIds = Array.from(
            e.target.selectedOptions,
            (option) => Number(option.value)
        );

        setBookData((prevBookData) => ({
            ...prevBookData,
            authorsId: selectedAuthorIds,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookData);
        fetch(`http://localhost:8080/api/books/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Book updated successfully");
                    navigate("/books");
                } else {
                    console.error("Error updating Book");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={bookData.title}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="isbn">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                    type="text"
                    name="isbn"
                    value={bookData.isbn}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="authorsId">
                <Form.Label>Authors</Form.Label>
                <Form.Control
                    as="select"
                    name="authorsId"
                    multiple
                    value={bookData.authorsId}
                    onChange={handleAuthorSelection}
                >
                    {authors.map((author) => (
                        <option key={author.id} value={author.id}>
                            {author.firstName}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="publishedDate">
                <Form.Label>Published Date</Form.Label>
                <Form.Control
                    type="date"
                    name="publishedDate"
                    value={bookData.publishedDate}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="available">
                <Form.Check
                    type="checkbox"
                    name="available"
                    label="Available"
                    checked={bookData.available}
                    onChange={(e) =>
                        setBookData((prevBookData) => ({
                            ...prevBookData,
                            available: e.target.checked,
                        }))
                    }
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="my-4">
                Update Author
            </Button>
        </Form>
    );
};

export default UpdateBookForm;
