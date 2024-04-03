import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
// imported icons at highest level so I never have to think about them again
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";
// also imported at highlest level so I can use everywhere
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
