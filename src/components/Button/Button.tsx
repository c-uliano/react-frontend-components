import { ButtonProps } from "./utlis";
import { Link } from "react-router-dom";


const Button = (props: ButtonProps) => {

    const buttonClasses = `btn ${props.variant} ${props.size}`;


    // //TODO: put all the repeating classnames into a variable, so it can be changed in one spot
    const renderButton = () => {
        // will display the appropriate button type depending on prop, with <button> as the default
        switch (props.btnType) {
            case 'button':
                return <button onClick={props.onClick} type="button" className={buttonClasses}>{props.text}</button>;
            case 'Link':
                return <Link onClick={props.onClick} to={props.url} className={buttonClasses}>{props.text}</Link>;
            case 'input':
                // //TODO: type will need updating for prop
                return <input onClick={props.onClick} type={props.type} value={props.text} className={buttonClasses} />;
            case 'anchor':
                return <a onClick={props.onClick} href={props.url} className={buttonClasses} target={props.newTab ? "_blank" : undefined}>{props.text}</a>;
            default:
                return <button onClick={props.onClick} type="button" className={buttonClasses}>{props.text}</button>
        }
    }

    return (
        <>
            {renderButton()}
            {/* <button onClick={props.onClick} type="button" className="btn">{props.text}</button> */}

            {/* {props.btnType == 'button' && (

            ) } */}
        </>
    )
}

export default Button;