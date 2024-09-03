# React Component Library

Styled using Bootstrap.

How is this different than React Bootstrap? I'm building it from scratch so I learn more.

The future goal is to strip this down so it's functional but no longer using Bootstrap for styling, so it can be used with any css framework.

## Components

- **[ColorTheme](src/components/ColorTheme/README.md)**
- **[Logo](src/components/Logo/README.md)**

### NavLink
Multiple props to customize the NavLink
- text (required, string): the text to be displayed
- icon (optional, string): set the icon by putting the bootstrap icon class name, i.e. `bi-boombox-fill`
- iconSize (optional, string): enter the font size if you want adjust the icon size. Use with caution, it will mess up alignment with other links that don't have icons
- hideText (optional, boolean): to hide the text and only show the icon. Good to use for social media links
- url (required, string): the link
- newTab (optional, boolean): to open the link in a new tab
- useLink (optional, boolean): set to `false` if you want to use the `anchor` tag option. `Link` will be set by default, but that will throw errors if the app isn't set up to use 