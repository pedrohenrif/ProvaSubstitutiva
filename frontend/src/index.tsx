import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CadastrarPc from "./components/pages/CadastrarPc";
import ListarPc from "./components/pages/ListarPc";
import Error from "./components/pages/Error";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastrarPc />,
      },
      {
        path: "/cadastrar",
        element: <CadastrarPc />,
      },
      {
        path: "/listar",
        element: <ListarPc />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);