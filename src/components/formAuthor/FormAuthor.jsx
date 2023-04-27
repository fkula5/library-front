import { useState } from "react";
import { Container } from "react-bootstrap";

const FormAuthor = ({ onAddAuthor }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAuthor = { firstName, lastName, country };
        onAddAuthor(newAuthor);
        setFirstName("");
        setLastName("");
        setCountry("");
    };

    return (
        <Container style={{ flex: 1 }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-4">
                    <label htmlFor="firstName">Imię</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="lastName">Nazwisko</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="country">Kraj</label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Dodaj autora
                </button>
            </form>
        </Container>
    );
};

export default FormAuthor;
