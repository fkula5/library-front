import Footer from "../components/footer/Footer";
import FormAuthor from "../components/formAuthor/FormAuthor";
import Navigation from "../components/nav/Navigation";

export default function BookForm() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Navigation />
            <FormAuthor />
            <Footer />
        </div>
    );
}
