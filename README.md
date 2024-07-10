# React Component Library

Styled using Bootstrap.

How is this different than React Bootstrap? I'm building it from scratch so I learn more.

## Components

### ColorTheme

To toggle between light and dark mode.

Props to set the starting theme, decide to show or hide button text, and set the button text.


### Logo

Multiple props to customize your logo
- url (required, string): the link
- altText (required, string): text to be used for the `alt` tag. Required because if no logo file is uploaded the `alt` text is displayed in it's place
- useLink (optional, boolean): set to `false` if you want to use the `anchor` tag option. `Link` will be set by default, but that will throw errors if the app isn't set up to use `react-router-dom`
- newTab (optional, boolean): when set to `true` it will set `target="_blank"`
- logoFile (optional, string): set the location of the logo file
- size (optional, string): will set the width of the logo file

### NavLink
Multiple props to customize the NavLink
- text (required, string): the text to be displayed
- icon (optional, string): set the icon by putting the bootstrap icon class name, i.e. `bi-boombox-fill`
- iconSize (optional, string): enter the font size if you want adjust the icon size. Use with caution, it will mess up alignment with other links that don't have icons
- hideText (optional, boolean): to hide the text and only show the icon. Good to use for social media links
- url (required, string): the link
- newTab (optional, boolean): to open the link in a new tab
- useLink (optional, boolean): set to `false` if you want to use the `anchor` tag option. `Link` will be set by default, but that will throw errors if the app isn't set up to use 