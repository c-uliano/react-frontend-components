// TODO
// // so this button, when clicked, needs to target the data-bs-theme attribute in the html tag and change it to dark/light
// // const rootElement = document.documentElement; To select the <html>
// // rootElement.getAttribute(); - to get the attribute
// // rootElement.setAttribute(); - to set the attribute
// // rootElement.removeAttribute(); - to remove the attribute
// add props to customize or remove the button text
// // add props to set starting theme

import { useState, useEffect } from "react";

const ColorTheme = (props: { theme?: string }) => {
    // ? longer way to write this all out
    // const initialTheme = props.theme || "dark";
    // const [theme, setTheme] = useState(initialTheme);
    const [theme, setTheme] = useState(props.theme || "dark");

    // * my first go
    // const rootElement = document.documentElement;
    // rootElement.setAttribute("data-bs-theme", theme);

    // const toggleTheme = () => {
    //     const newTheme = theme === "dark" ? "light" : "dark";
    //     rootElement.setAttribute("data-bs-theme", newTheme);
    //     setTheme(newTheme);
    // };

    // * second go
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

    // * third go
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

    return (
        <>
            <button onClick={toggleTheme} className="btn btn-outline-secondary">
                <i className={theme === "dark" ? "bi-moon" : "bi-brightness-high"}></i>
                Change Theme
            </button>
        </>
    );
};

export default ColorTheme;
