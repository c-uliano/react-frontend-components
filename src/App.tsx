import "./App.scss";
//import 'bootstrap/dist/css/bootstrap.min.css'; // if I'm just using Bootstrap as-is I can import it here.
import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";

function App() {
    // to set the <title> for each page, do this
    useEffect(() => {
        document.title = "React Component Library";
    }, []);

    const addButtonProps = {
        text: 'Button Here', 
        variant: 'btn btn-outline-primary', 
        icon: 'bi-backpack', 
        iconPosition: 'end',
        url: '#',
        btnType: 'anchor'
    }

    const clickHandler = () => {
        alert('button clicked');
    }

    return (
        <div className="container-sm">
            <Header />

            <Hero 
                h1Header="Testing This" 
                content="more content goes here" 
                imgUrl="../../src/assets/roma.jpg" 
                bgPosition="bottom center" 
                buttonProps={addButtonProps} 
            />

            <Button 
                text="Button Here" 
                variant="btn btn-primary" 
                icon="bi-123" 
                iconPosition="start" 
                btnType="button" 
                onClick={clickHandler}
                size="btn-lg" 
            />
            
            <br />

            <div className="m-2">
                <p>
                    The <code>ColorTheme</code> component is now working. Switches between light and dark mode. Can set the starting theme, decide to
                    show or hide button text, and set the button text.
                </p>
                <p>
                    The <code>Logo</code> component is partially working. Using the <code>anchor</code> is completely finished, using the{" "}
                    <code>Link</code> is still in development.
                </p>
                <p>
                    <code>props</code> options include placing the url, choosing the logo file, adding the <code>alt</code> text, setting the width,
                    and more
                </p>
            </div>
        </div>
    );
}

export default App;
