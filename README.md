# React Component Library

Styled using Bootstrap.

How is this different than React Bootstrap? I'm building it from scratch so I learn more.

## Components

### ColorTheme

To toggle between light and dark mode.

None of the props are required. Used without props will display an icon-only button and the color mode will default to dark.

Multiple props to customize the ColorTheme
- theme (optional, string): to set the default color theme. If not included it defaults to dark
- textVisible (optional, boolean): default is just the icon. If you want to see text next to the icon this has to be `true`
- text (optional, string): customize what text to display. Default is "Change Theme". `textVisible` needs to be `true` for `text` to display. 


### Logo

Multiple props to customize the Logo
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