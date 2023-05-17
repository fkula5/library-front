import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddPersonForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
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
        fetch("http://127.0.0.1:8080/api/people", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Person added:", data);
                setFormData({
                    firstName: "",
                    secondName: "",
                });
                navigate("/people");
            })
            .catch((error) => {
                console.error("Error adding person:", error);
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
            <Button variant="primary" type="submit" className="my-4">
                Add Person
            </Button>
        </Form>
    );
};

export default AddPersonForm;
