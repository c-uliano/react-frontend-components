import React from "react";
import { ButtonProps } from "./utlis";
import { Link } from "react-router-dom";
import "./button.scss";


const Button = (props: ButtonProps) => {

    const buttonClasses = `btn ${props.variant} ${props.size}`;

    // //TODO: some icons need align-middle class, others don't. Might need to be a prop, to adjust icon alignment. 
    const icon = <i className={`bi ${props.icon} ${props.iconPosition === 'start' ? 'pe-2' : 'ps-2'} ${props.iconAlign ? `align-${props.iconAlign}` : "" }`}></i>;


    // //TODO: put all the repeating classnames into a variable, so it can be changed in one spot
    const renderButton = () => {
        // will display the appropriate button type depending on prop, with <button> as the default
        switch (props.btnType) {
            case 'button':
                return <button onClick={props.onClick} type="button" className={buttonClasses}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</button>;
            case 'Link':
                return <Link onClick={props.onClick} to={props.url} className={buttonClasses}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</Link>;
            case 'input':
                // //TODO: type will need updating for prop
                // //TODO: how to display icon for input button type
                // wrapping it in a span and applying class there could work, need to remove the default input styling though
                // TODO: future problem during testing, the onClick - does it need moved to the <span>?
                return (<span className={buttonClasses}>{props.iconPosition === 'start' && icon}<input onClick={props.onClick} type={props.type} value={props.text} />{props.iconPosition === 'end' && icon}</span>);
            case 'anchor':
                return <a onClick={props.onClick} href={props.url} className={buttonClasses} target={props.newTab ? "_blank" : undefined}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</a>;
            default:
                return <button onClick={props.onClick} type="button" className={buttonClasses}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</button>
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