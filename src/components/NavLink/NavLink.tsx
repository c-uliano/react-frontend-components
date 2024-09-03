// TODO
// //prop for text
// //prop to hide text and only show icon
// //prop to set icon
// //prop for url
// //prop for target="_blank"
// //conditional rendering between Link and anchor - do this last

import { Link } from "react-router-dom";

const NavLink = (props: { text: string; icon?: string; iconSize?: string; hideText?: boolean; url: string; newTab?: boolean; useLink?: boolean; }) => {
    // * take one
    // const iconSizeStyle = {
    //     fontSize: props.iconSize || "inherit"
    // }

    // * take two
    // so you don't always have font-size showing inline, even when it's not being used. But this still shows the style attribute.
    const iconSizeStyle = props.iconSize ? { fontSize: props.iconSize } : {};

    //* take three
    // I can't get this to work. I want everything to be conditionally rended, including the style attribute.
    // const iconSizeStyle = props.iconSize && `style="font-size: ${props.iconSize}"`;

    // TODO: could use refactoring, see Logo for example
    return (
        <li className="nav-item">

            {props.useLink === false ? (
                <a className="nav-link" aria-current="page" href={props.url} target={props.newTab ? "_blank" : undefined}>
                    {props.icon && <i style={iconSizeStyle} className={`bi ${props.icon} pe-1`}></i>}
                    {props.icon && props.hideText ? "" : props.text}
                </a>
            ) : (
                <Link className="nav-link" aria-current="page" to={props.url} target={props.newTab ? "_blank" : undefined}>
                    {props.icon && <i style={iconSizeStyle} className={`bi ${props.icon} pe-1`}></i>}
                    {props.icon && props.hideText ? "" : props.text}
                </Link>
            )}



            
        </li>
    );
};

export default NavLink;
