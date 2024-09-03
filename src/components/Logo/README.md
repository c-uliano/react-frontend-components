# Logo

Component for the logo.

### Multiple props to customize `Logo`
- `url` (required, string): the link
- `altText` (required, string): text to be used for the `alt` tag. Required because if no logo file is uploaded the `alt` text is displayed in it's place
- `useLink` (optional, boolean): set to `false` if you want to use the `anchor` tag option. `Link` will be set by default, but that will throw errors if the app isn't set up to use `react-router-dom`
- `newTab` (optional, boolean): when set to `true` it will set `target="_blank"`
- `logoFile` (optional, string): set the location of the logo file
- `size` (optional, string): will set the width of the logo file. 
  - If there is no file then it will adjust the `font-size` of the `alt` text being displayed. 
  - when no `size` is set the default `font-size` will be 1.5em