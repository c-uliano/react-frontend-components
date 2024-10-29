import { ButtonProps } from "../Button/utlis"

// v1, but I can't set a default value this way
export interface HeroProps {
    imgUrl?: string,
    height?: string,
    bgPosition?: string,
    h1Header?: string,
    content?: string,
    link?: string,
    btnText?: string,
    buttonProps?: ButtonProps
}

// v2, but importing an object and using it for types doesn't work in typescript
// interface Props {
//     imgUrl?: string,
//     height?: string,
//     bgPosition?: string,
//     h1Header?: string,
//     content?: string,
//     link?: string,
//     btnText?: string
// }

// export const HeroProps: Props = {
//     height: '50vh'
// }
