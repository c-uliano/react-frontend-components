// TODO

import ColorTheme from "../ColorTheme";
import Logo from "../Logo";
import NavLink from "../NavLink";

const Header = () => {
    return (
        <header className="border-bottom border-primary">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Logo useLink={false} altText="The Logo" url="#" size="100px" logoFile="../../src/assets/logo-dark.png" />
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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink text="Home" />
                            <NavLink text="About" />
                            <NavLink text="Contact" />
                            <ColorTheme textVisible={false} />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
