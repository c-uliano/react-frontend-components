# Hero

Image for the top of a page, with optional text (like `h1` header) and button

### Multiple props to customize Hero
- `imgUrl` (optional, string): location to hero background image
- `height` (optional, string): height of the hero. If not used the default height is `50vh`
- `bgPosition` (optional, string): position of the background image. If not used the default is `center center`
- `h1Header` (optional, string): `h1` header overtop the hero
- `content` (optional, string): secondary content that goes overtop the hero
- `buttonProps` (optional, multiple): pulls the `ButtonProps` interface from `Button`, so all those props can be used in `Hero` to customize the `Button` overtop the hero
- `bgColor` (optional, string): to add a background color to hero. Can be used on it's own, without an `imgUrl`, or it can be used as a color overlay overtop the hero image. If prop isn't used the default is `#00000063`. Use a solid color or a color with lowered opacity, like the default hex, or `rbga`

### Future Enhancements
- a way to position the hero under the header