// TODO
// prop for text
// should this be a Link instead of anchor?
// prop to show icon
// prop to select icon
// prop for url
// prop for target="_blank" - does this work on Link?

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
