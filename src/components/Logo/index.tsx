// TODO
// prop for path to logo file
// prop for logo text if no logo file
// prop for target _blank
// prop to size the logo?
// prop to useLink
// if useLink = true then it's Link and to, else anchor and href

import { Link } from "react-router-dom";

const Logo = (props: { path?: string; altText: string; useLink?: boolean }) => {
    return (
        <>
            {props.useLink ? (
                <Link className="navbar-brand" to="/">
                    {/* <img src="/assets/logo-slate.png" alt="" /> */}
                    Navbar
                </Link>
            ) : (
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
            )}
        </>
    );
};

export default Logo;
