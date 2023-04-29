import Footer from "../components/footer/Footer";
import FormRent from "../components/formRent/FormRent";
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
            <FormRent />
            <Footer />
        </div>
    );
}
