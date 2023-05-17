import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddBookForm = () => {
    const [authors, setAuthors] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        isbn: "",
        authorsId: [],
        publishedDate: "",
        available: true,
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://127.0.0.1:8080/api/authors")
            .then((response) => response.json())
            .then((data) => {
                setAuthors(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleAuthorSelection = (e) => {
        const selectedAuthorIds = Array.from(
            e.target.selectedOptions,
            (option) => Number(option.value)
        );

        setFormData((prevFormData) => ({
            ...prevFormData,
            authorsId: selectedAuthorIds,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        fetch("http://127.0.0.1:8080/api/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Book added succefully", data);
                setFormData({
                    title: "",
                    isbn: "",
                    authorsId: [],
                    publishedDate: "",
                    available: true,
                });
                navigate("/books");
            })
            .catch((error) => {
                console.error("Error: ", error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="isbn">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                    type="text"
                    name="isbn"
                    value={formData.isbn}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="authorsId">
                <Form.Label>Authors</Form.Label>
                <Form.Control
                    as="select"
                    name="authorsId"
                    multiple
                    value={formData.authorsId}
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
                    value={formData.publishedDate}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="available">
                <Form.Check
                    type="checkbox"
                    name="available"
                    label="Available"
                    checked={formData.available}
                    onChange={(e) =>
                        setFormData((prevFormData) => ({
                            ...prevFormData,
                            available: e.target.checked,
                        }))
                    }
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Book
            </Button>
        </Form>
    );
};

export default AddBookForm;
