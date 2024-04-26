// TODO
// get theme prop working
//// get text prop working
//// get textVisible prop working
// get color switching to work with the new drop down
// figure out how to get the auto option to work

import { useState, useEffect } from "react";

const ColorTheme = (props: { theme?: string; textVisible?: boolean; text?: string }) => {
    const [theme, setTheme] = useState("");
    const [text, setText] = useState("");

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
                    data-bs-display="static">
                    <i className="bi bi-moon-fill"></i>
                    {props.textVisible !== false && (
                        <span className="ms-2" id="bd-theme-text">
                            {text}
                        </span>
                    )}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme-text">
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
                            <i className="bi bi-sun-fill"></i>
                            Light
                            {/* <i className="d-none bi bi-check2"></i> */}
                        </button>
                    </li>
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="true">
                            <i className="bi bi-moon-fill"></i>
                            Dark
                            {/* <i className="d-none bi bi-check2"></i> */}
                        </button>
                    </li>
                    {/* <li>
                        <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
                            <i className="bi bi-moon-fill"></i>
                            Auto
                            <i className="d-none bi bi-check2"></i>
                        </button>
                    </li> */}
                </ul>
            </div>
        </>
    );
};

export default ColorTheme;
