// TODO
// //prop for path to logo file. If it doesn't exist display altText. Maybe just do this instead of a separate prop for logo text
// //prop for logo text if no logo file
// //prop for target _blank
// prop to size the logo?
// //prop to useLink
// //if useLink = true then it's Link and to, else anchor and href
// //prop for the link

// //prop for sizing an image logo
// //prop for sizing a text logo?

// //update structure so if useLink is false it does the anchor, use &&. And then below that just have <Link> set up as the default. So you would really only use this prop when you need to set it to false to use an anchor i.e. uselink={false}
    // tried to do this, think I did it wrong, didn't work. I'm a little out of practice.
    // found another way to update it to achieve the same result. Should default to Link - be sure to have react-router-dom all set up if you decide to use this option

import { Link } from "react-router-dom";
import styles from './logo.module.scss';

const Logo = (props: { url: string; altText: string; useLink?: boolean; newTab?: boolean; logoFile?: string; size?: string; }) => {
    return (
        <>
            {props.useLink === false ? (
                <a className="navbar-brand" href={props.url} target={props.newTab ? "_blank" : undefined}>
                    {props.logoFile ? <img src={props.logoFile} width={props.size} alt={props.altText} /> : <span className={styles.logoText}>{props.altText}</span>}
                </a>
            ) : (
                <Link className="navbar-brand" to={props.url}>
                    {props.logoFile ? <img src={props.logoFile} width={props.size} alt={props.altText} /> : <span className={styles.logoText}>{props.altText}</span>}
                </Link>
            )}
        </>
    );
};

export default Logo;
