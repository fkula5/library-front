import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddAuthorForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        country: "",
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/authors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Author added:", data);
                // Reset the form
                setFormData({
                    firstName: "",
                    secondName: "",
                    country: "",
                });
                navigate("/authors");
            })
            .catch((error) => {
                console.error("Error adding author:", error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="secondName">
                <Form.Label>Second Name</Form.Label>
                <Form.Control
                    type="text"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="my-4">
                Add Author
            </Button>
        </Form>
    );
};

export default AddAuthorForm;
