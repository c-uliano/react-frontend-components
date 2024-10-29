type ButtonTypes = 'Link' | 'input' | 'button' | 'anchor';

type InputTypes = 'input' | 'submit' | 'reset';

type IconPosition = 'start' | 'end';

type buttonVariants = 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-info' | 'btn-light' | 'btn-dark' | 'btn-link';

export interface ButtonProps {
    text?: string,
    onClick?: () => void, // do this instead of Function
    size?: string,
    variant?: buttonVariants, // //TODO: update this to a type with the Bootstrap button class options
    url?: string, 
    btnType?: ButtonTypes,
    type?: InputTypes,
    icon?: string, // if this is truthy then an icon displays
    iconPosition?: IconPosition,
    hideText?: boolean,
    newTab?: boolean
}