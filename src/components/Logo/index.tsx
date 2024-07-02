// TODO
// //prop for path to logo file. If it doesn't exist display altText. Maybe just do this instead of a separate prop for logo text
// //prop for logo text if no logo file
// //prop for target _blank
// prop to size the logo?
// //prop to useLink
// //if useLink = true then it's Link and to, else anchor and href
// //prop for the link

// prop for sizing an image logo
// prop for sizing a text logo?

// update structure so if useLink is false it does the anchor, use &&. And then below that just have <Link> set up as the default. So you would really only use this prop when you need to set it to false to use an anchor i.e. uselink={false}

import { Link } from "react-router-dom";

const Logo = (props: { url: string; altText: string; useLink?: boolean; newTab?: boolean; logoFile?: string }) => {
    return (
        <>
            {props.useLink ? (
                <Link className="navbar-brand" to={props.url}>
                    {props.logoFile ? <img src={props.logoFile} alt={props.altText} /> : props.altText}
                    {/* <img src="/assets/logo-slate.png" alt="" /> */}
                </Link>
            ) : (
                <a className="navbar-brand" href={props.url} target={props.newTab ? "_blank" : undefined}>
                    {props.logoFile ? <img src={props.logoFile} alt={props.altText} /> : props.altText}
                </a>
            )}
        </>
    );
};

export default Logo;
