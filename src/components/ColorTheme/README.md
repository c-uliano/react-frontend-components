# ColorTheme

To toggle between light and dark mode.

None of the props are required. Used without props will display an icon-only button and the color mode will default to dark.

### Multiple props to customize `ColorTheme`
- `theme` (optional, string): to set the default color theme. If not included it defaults to dark
- `textVisible` (optional, boolean): default is just the icon. If you want to see text next to the icon this has to be `true`
- `text` (optional, string): customize what text to display. Default is "Change Theme". `textVisible` needs to be `true` for `text` to display. 

### Future Enhancements
- Autodetect user's color mode, with option to override user's preference and choose light or dark