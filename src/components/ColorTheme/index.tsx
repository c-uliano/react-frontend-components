// TODO
// // so this button, when clicked, needs to target the data-bs-theme attribute in the html tag and change it to dark/light
// // const rootElement = document.documentElement; To select the <html>
// // rootElement.getAttribute(); - to get the attribute
// // rootElement.setAttribute(); - to set the attribute
// // rootElement.removeAttribute(); - to remove the attribute
// // add props to customize or remove the button text
// // add props to set starting theme

import { useState, useEffect } from "react";

const ColorTheme = (props: { theme?: string; textVisible?: boolean; text?: string }) => {
    // ? longer way to write this all out, just put props.theme || "dark" right into the useState as it's value
    // const initialTheme = props.theme || "dark";
    // const [theme, setTheme] = useState(initialTheme);
    // ? seemed redundant to have the value here and repeated again in the useEffect
    // const [theme, setTheme] = useState(props.theme || "dark");
    // const [text, setText] = useState(props.text || "Change Theme");
    const [theme, setTheme] = useState("");
    const [text, setText] = useState("");

    // * first go - setting/changing theme
    // const rootElement = document.documentElement;
    // rootElement.setAttribute("data-bs-theme", theme);

    // const toggleTheme = () => {
    //     const newTheme = theme === "dark" ? "light" : "dark";
    //     rootElement.setAttribute("data-bs-theme", newTheme);
    //     setTheme(newTheme);
    // };

    // * second go - setting/changing theme
    // useEffect(() => {
    //     const rootElement = document.documentElement;
    //     rootElement.setAttribute("data-bs-theme", theme);
    // }, [theme]);

    // const toggleTheme = () => {
    //     // ? longer way to write this all out
    //     // const newTheme = theme === "dark" ? "light" : "dark";
    //     // setTheme(newTheme);
    //     setTheme(theme === "dark" ? "light" : "dark");
    // };

    // * third go - setting/changing theme. Completely reactive, changes show without refreshing page
    useEffect(() => {
        setTheme(props.theme || "dark");
    }, [props.theme]);

    useEffect(() => {
        const rootElement = document.documentElement;
        rootElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // * first go - setting/changing text. Based off of what was done for changing/setting theme. Completely reactive, changes show without refreshing page
    useEffect(() => {
        setText(props.text || "Change Theme");
    }, [props.text]);

    return (
        <>
            <div className="dropdown">
                <button
                    className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                    id="bd-theme"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-label="Toggle theme (dark)">
                    <i className="bi bi-moon-fill"></i>
                    <span className="d-lg-none ms-2" id="bd-theme-text">
                        Toggle theme
                    </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                            <i className="bi bi-moon-fill"></i>
                            Light
                            <i className="bi bi-check2"></i>
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            className="dropdown-item d-flex align-items-center active"
                            data-bs-theme-value="dark"
                            aria-pressed="true">
                            <i className="bi bi-moon-fill"></i>
                            Dark
                            <i className="bi bi-check2"></i>
                        </button>
                    </li>
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                            <i className="bi bi-moon-fill"></i>
                            Auto
                            <i className="bi bi-check2"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ColorTheme;
