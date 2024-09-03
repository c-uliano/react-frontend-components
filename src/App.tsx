import "./App.scss";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";

function App() {
    // to set the <title> for each page, do this
    useEffect(() => {
        document.title = "React Component Library";
    }, []);

    return (
        <div className="container-sm">
            <Header />
            <Hero height="500px" />
            <Button text="Button Here" variant="btn-primary" icon="bi-123" iconPosition="end" btnType="input" type="reset" iconAlign="middle" />

            <div className="m-2">
                <p>The <code>ColorTheme</code> component is now working. Switches between light and dark mode. Can set the starting theme, decide to show or hide button text, and set the button text.</p>
                <p>The <code>Logo</code> component is partially working. Using the <code>anchor</code> is completely finished, using the <code>Link</code> is still in development.</p>
                <p><code>props</code> options include placing the url, choosing the logo file, adding the <code>alt</code> text, setting the width, and more</p>
            </div>
        </div>
    );
}

export default App;
