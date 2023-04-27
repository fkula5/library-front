import Footer from "../components/footer/Footer";
import FormBook from "../components/formBook/formBook";
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
            <FormBook />
            <Footer />
        </div>
    );
}
