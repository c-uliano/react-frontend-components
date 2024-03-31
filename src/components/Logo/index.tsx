// TODO
// prop for path to logo file
// prop for logo text if no logo file
// prop to size the logo?
// prop to useLink
// if useLink = true then it's Link and to, else anchor and href

const Logo = (props: { path?: string; altText: string; useLink?: boolean }) => {
    return (
        <a className="navbar-brand" href="#">
            Navbar
        </a>
    );
};

export default Logo;
