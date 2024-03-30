import "./App.scss";
import { useEffect } from "react";
import ColorTheme from "./components/ColorTheme";
import Header from "./components/Header/Header";

function App() {
    // to set the <title> for each page, do this
    useEffect(() => {
        document.title = "React Component Library";
    }, []);

    return (
        <div className="container-sm">
            <Header />
            <div className="m-2">
                <p className="mt-2">
                    The <code>ColorTheme</code> component is now working. Switches between light and dark mode. Can set the starting theme, decide to
                    show or hide button text, and set the button text.
                </p>
            </div>
        </div>
    );
}

export default App;
