type ButtonTypes = 'Link' | 'input' | 'button' | 'anchor';

type InputTypes = 'input' | 'submit' | 'reset';

type IconPosition = 'start' | 'end';

type IconAlignment = 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom';

type buttonVariants = 
    'btn-primary' | 
    'btn-secondary' | 
    'btn-success' | 
    'btn-danger' | 
    'btn-warning' | 
    'btn-info' | 
    'btn-light' | 
    'btn-dark' | 
    'btn-link' |
    'btn-outline-primary' |
    'btn-outline-secondary' |
    'btn-outline-success' |
    'btn-outline-danger' |
    'btn-outline-warning' |
    'btn-outline-info' |
    'btn-outline-light' |
    'btn-outline-dark';

type buttonSizes = 'btn-lg' | 'btn-sm';

export interface ButtonProps {
    text?: string,
    onClick?: () => void, // do this instead of Function
    size?: buttonSizes,
    variant?: buttonVariants, // //TODO: update this to a type with the Bootstrap button class options
    url?: string, 
    btnType?: ButtonTypes,
    type?: InputTypes,
    icon?: string, // if this is truthy then an icon displays
    iconPosition?: IconPosition, // required, no default icon placement
    iconAlign?: IconAlignment,
    hideText?: boolean,
    newTab?: boolean
}