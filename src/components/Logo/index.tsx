// TODO
// //prop for path to logo file. If it doesn't exist display altText. Maybe just do this instead of a separate prop for logo text
// //prop for logo text if no logo file
// //prop for target _blank
// prop to size the logo?
// //prop to useLink
// //if useLink = true then it's Link and to, else anchor and href
// prop for the link

import { Link } from "react-router-dom";

const Logo = (props: { urlLink: string; altText: string; useLink?: boolean; newTab?: boolean; logoFile?: string }) => {
    return (
        <>
            {props.useLink ? (
                <Link className="navbar-brand" to="/">
                    {props.logoFile ? <img src={props.logoFile} alt={props.altText} /> : props.altText}
                    {/* <img src="/assets/logo-slate.png" alt="" /> */}
                </Link>
            ) : (
                <a className="navbar-brand" href="#" target={props.newTab ? "_blank" : undefined}>
                    {props.logoFile ? <img src={props.logoFile} alt={props.altText} /> : props.altText}
                </a>
            )}
        </>
    );
};

export default Logo;
