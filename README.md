# React Component Library

Styled using Bootstrap.

How is this different than React Bootstrap? I'm building it from scratch so I learn more.

## Components

### ColorTheme

To toggle between light and dark mode.

Props to set the starting theme, decide to show or hide button text, and set the button text.


### Logo

Multiple props to customize your logo
- <span style="color: #32A89C">**url (required, string):**</span> the link
- <span style="color: #32A89C">**altText (required, string):**</span> text to be used for the `alt` tag. Required because if no logo file is uploaded the `alt` text is displayed in it's place
- <span style="color: #32A89C">**useLink (optional, boolean):**</span> set to `false` if you want to use the `anchor` tag option. `Link` will be set by default, but that will throw errors if the app isn't set up to use `react-router-dom`
- <span style="color: #32A89C">**newTab (optional, boolean):**</span> when set to `true` it will set `target="_blank"`
- <span style="color: #32A89C">**logoFile (optional, string):**</span> set the location of the logo file
- <span style="color: #32A89C">**size (optional, string):**</span> will set the width of the logo file