// TODO
// prop for text
// conditional rendering between Link and anchor
// prop to show icon
// prop to set icon
// prop for url
// prop for target="_blank"

const NavLink = (props: { text: string }) => {
    return (
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
                {props.text}
            </a>
        </li>
    );
};

export default NavLink;
