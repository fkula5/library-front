import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePersonForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [personData, setPersonData] = useState({
        firstName: "",
        secondName: "",
        country: "",
    });

    useEffect(() => {
        fetch(`http://localhost:8080/api/people/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPersonData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonData((prevPersonData) => ({
            ...prevPersonData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:8080/api/people/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(personData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Author updated successfully");
                    navigate("/people");
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
                    value={personData.firstName}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="secondName">
                <Form.Label>Second Name</Form.Label>
                <Form.Control
                    type="text"
                    name="secondName"
                    value={personData.secondName}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="my-4">
                Update Person
            </Button>
        </Form>
    );
};

export default UpdatePersonForm;
