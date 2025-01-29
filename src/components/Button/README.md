# Button

Universal button for every situation

### Multiple props to customize Button
 - `text` (optional, string): the text to be displayed
 - `onClick` (optional, function): to handle the button click
 - `size` (option, string): to adjust the button's size, in terms of padding and font size
    <!-- - available options: `btn-lg`, `btn-sm`
      - typescript type options only, bootstrap classes
    - _**added as a class, so should be easy to adjust for styling with other css frameworks**_ -->
    - create classes, or use classes from css frameworks to size the button
      - if using Bootstrap, `btn-lg` would make the button bigger
      - for Tailwind, a combination of classes such as `p-2 text-xl` would make the button bigger
- `variant` (optional, string): to style the button with a solid color or outline using Bootstrap
  - adjust the Bootstrap variables to customize the color palette
  - available options:
    `btn-primary`
    `btn-secondary`
    `btn-success`
    `btn-danger`
    `btn-warning`
    `btn-info`
    `btn-light`
    `btn-dark`
    `btn-link`
    `btn-outline-primary`
    `btn-outline-secondary`
    `btn-outline-success`
    `btn-outline-danger`
    `btn-outline-warning`
    `btn-outline-info`
    `btn-outline-light`
    `btn-outline-dark`
      - typescript type options only, bootstrap classes
  - _**added as a class, so should be easy to adjust for styling with other css frameworks**_
- `url` (optional, string): the link
- `btnType` (optional, string): to choose button type: `Link`, `input`, `button`, or `anchor`
- `type` (optional, string): for use with `btnType="input"`, to determine what kind of input type it will be, `submit` or `reset`
- `icon` (optional, string): set the icon by putting the bootstrap icon class name, i.e. `bi-boombox-fill`
  - _**added as a class, so should be easy to adjust for styling with other icon libraries**_
- `iconPosition` (optional, string): where the icon will be placed, at the `start` of the text, or the `end` of the text
- `iconAlign` (optional, string): some icons look off-center compared to the text and need to be middle aligned, which you can do my setting `middle`.
  - available options: `baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`
    - typescript type options only, bootstrap classes
  - _**added as a class, so should be easy to adjust for styling with other css frameworks**_
- `newTab` (optional, boolean): to open the link in a new tab

### Future Enhancements
- `icon` needs some refactoring so it can use icons from other libraries, like FontAwesome or Material
- prop to disable button
- prop to adjust the size of the icon