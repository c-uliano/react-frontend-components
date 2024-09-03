// TODO

import ColorTheme from "../ColorTheme/ColorTheme";
import Logo from "../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import {navLinksArr} from "./utils";

const Header = () => {
    return (
        <header className="border-bottom border-primary">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Logo useLink={false} altText="The Logo" url="#" size="100px" logoFile="../../src/assets/logo-dark.png" />
                    {/* <Logo useLink={false} altText="The Logo" url="#" size="5em" /> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            {/* take one, listing everything separately*/}
                            {/* <NavLink useLink={false} url="#" icon="bi-boombox-fill" text="Home" />
                            <NavLink useLink={false} url="#" text="About" />
                            <NavLink useLink={false} url="#" text="Contact" />*/}

                            {/* take two, putting everything into an array and mapping through*/}
                            {navLinksArr.map((item, index) => (
                                <NavLink key={index} {...item} />
                            ))}
                            <ColorTheme /> 

                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
