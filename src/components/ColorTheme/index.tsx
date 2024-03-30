// TODO
// // so this button, when clicked, needs to target the data-bs-theme attribute in the html tag and change it to dark/light
// // const rootElement = document.documentElement; To select the <html>
// // rootElement.getAttribute(); - to get the attribute
// // rootElement.setAttribute(); - to set the attribute
// // rootElement.removeAttribute(); - to remove the attribute
// add props to customize or remove the button text

import { useState } from "react";

const ColorTheme = (props) => {
    const [theme, setTheme] = useState("dark");

    const onClick = () => {
        const rootElement = document.documentElement;
        if (rootElement.getAttribute("data-bs-theme") === "dark") {
            rootElement.setAttribute("data-bs-theme", "light");
            setTheme("light");
        } else {
            rootElement.setAttribute("data-bs-theme", "dark");
            setTheme("dark");
        }
    };

    return (
        <>
            <button onClick={() => onClick()} className="btn btn-outline-secondary">
                <i className={theme === "dark" ? "bi-moon" : "bi-brightness-high"}></i>
                Change Theme
            </button>
        </>
    );
};

export default ColorTheme;
