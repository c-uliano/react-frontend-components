import "./App.scss";
import ColorTheme from "./components/ColorTheme";

function App() {
    return (
        <div className="container-sm">
            <div className="m-2">
                <ColorTheme />
                <p className="mt-2">
                    The <code>ColorTheme</code> component is now working. Switches between light and dark mode. Can set the starting theme, decide to
                    show or hide button text, and set the button text.
                </p>
            </div>
        </div>
    );
}

export default App;
