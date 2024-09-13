type ButtonTypes = 'Link' | 'input' | 'button' | 'anchor';

type InputTypes = 'input' | 'submit' | 'reset';

type IconPosition = 'start' | 'end';

export interface ButtonProps {
    text?: string,
    onClick?: () => void, // do this instead of Function
    size?: string,
    variant?: string,
    url?: string, 
    btnType?: ButtonTypes,
    type?: InputTypes,
    icon?: string, // if this is truthy then an icon displays
    iconPosition: IconPosition,
    hideText?: boolean,
    newTab?: boolean
}