import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/users", element: <Users /> },
      { path: "/users/:id", element: <EditUser/> },
      { path: "/users/new", element: <AddUser /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
