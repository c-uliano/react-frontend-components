import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
// imported icons at highest level so I never have to think about them again
import "../node_modules/bootstrap-icons/font/bootstrap-icons.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
