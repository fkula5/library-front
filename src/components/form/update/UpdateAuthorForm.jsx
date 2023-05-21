import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateAuthorForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [authorData, setAuthorData] = useState({
        firstName: "",
        secondName: "",
        country: "",
    });

    useEffect(() => {
        fetch(`http://localhost:8080/api/authors/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setAuthorData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAuthorData((prevAuthorData) => ({
            ...prevAuthorData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/api/authors/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(authorData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Author updated successfully");
                    navigate("/authors");
                } else {
                    console.error("Error updating author");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    value={authorData.firstName}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="secondName">
                <Form.Label>Second Name</Form.Label>
                <Form.Control
                    type="text"
                    name="secondName"
                    value={authorData.secondName}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    name="country"
                    value={authorData.country}
                    onChange={handleInputChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="my-4">
                Update Author
            </Button>
        </Form>
    );
};

export default UpdateAuthorForm;
