import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./pages/Root";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Book from "./pages/Book";
import Author from "./pages/Author";
import AddBook from "./pages/AddBook";
import AddAuthor from "./pages/AddAuthor";
import AddPerson from "./pages/AddPerson";
import UpdateAuthor from "./pages/UpdateAuthor";
import UpdatePerson from "./pages/UpdatePerson";
import UpdateBook from "./pages/UpdateBook";
import People from "./pages/People";
import Person from "./pages/Person";
import Transactions from "./pages/Transactions";
import Transaction from "./pages/Transaction";
import AddTransaction from "./pages/AddTransaction";
import UpdateTransaction from "./pages/UpdateTransaction";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Root />} />
                <Route exact path="/books" element={<Books />} />
                <Route exact path="/books/:id" element={<Book />} />
                <Route exact path="/addBook" element={<AddBook />} />
                <Route exact path="/updateBook/:id" element={<UpdateBook />} />
                <Route exact path="/transactions" element={<Transactions />} />
                <Route
                    exact
                    path="/transactions/:id"
                    element={<Transaction />}
                />
                <Route
                    exact
                    path="/addTransaction"
                    element={<AddTransaction />}
                />
                <Route
                    exact
                    path="/updateTransaction/:id"
                    element={<UpdateTransaction />}
                />
                <Route exact path="/people" element={<People />} />
                <Route exact path="/people/:id" element={<Person />} />
                <Route exact path="/addPerson" element={<AddPerson />} />
                <Route
                    exact
                    path="/updatePerson/:id"
                    element={<UpdatePerson />}
                />
                <Route exact path="/authors" element={<Authors />} />
                <Route exact path="/authors/:id" element={<Author />} />
                <Route exact path="/addAuthor" element={<AddAuthor />} />
                <Route
                    exact
                    path="/updateAuthor/:id"
                    element={<UpdateAuthor />}
                />
            </Routes>
        </Router>
    </React.StrictMode>
);
