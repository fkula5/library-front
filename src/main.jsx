import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./pages/Root";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Book from "./pages/Book";
import BookForm from "./pages/BookForm";
import AuthorForm from "./pages/AuthorForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "/books",
        element: <Books />,
    },
    {
        path: "/authors",
        element: <Authors />,
    },
    {
        path: "/users",
        element: <AuthorForm />,
    },
    {
        path: "/books/:id",
        element: <Book />,
    },
    {
        path: "/authors/:id",
        element: <Book />,
    },
    {
        path: "/bookForm",
        element: <BookForm />,
    },
    {
        path: "/authorForm",
        element: <AuthorForm />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
