import React from "react";
import { ButtonProps } from "./utlis";
import { Link } from "react-router-dom";
import { Button } from '@headlessui/react';
import styles from './button.module.scss';

const MyButton = (props: ButtonProps) => {

    const buttonClasses = `btn ${props.variant} ${props.size}`;

    // ! OG version with the bootstrap class for aligning the icon
    // const icon = <i className={`${props.icon} ${props.iconPosition === 'start' ? styles.iconPaddingEnd : styles.iconPaddingStart} ${props.iconAlign ? `align-${props.iconAlign}` : "" }`}></i>;
    // TODO: update to use any css framework classes to align the icon
    const icon = <i className={`${props.icon} ${props.iconPosition === 'start' ? styles.iconPaddingEnd : styles.iconPaddingStart}`}></i>;


    const renderButton = () => {
        // * will display the appropriate button type depending on prop, with <button> as the default
        switch (props.btnType) {
            case 'button':
                // //: update this to use headless Button
                // return <button onClick={props.onClick} type="button" className={buttonClasses}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</button>;
                return <Button className={buttonClasses} onClick={props.onClick}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</Button>;
            case 'Link':
                return <Link onClick={props.onClick} to={props.url} className={buttonClasses}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</Link>;
            case 'input':
                // TODO: future problem during testing, the onClick - does it need moved to the <span>?
                return (<span className={buttonClasses}>{props.iconPosition === 'start' && icon}<input onClick={props.onClick} type={props.type} value={props.text} />{props.iconPosition === 'end' && icon}</span>);
            case 'anchor':
                return <a onClick={props.onClick} href={props.url} className={buttonClasses} target={props.newTab ? "_blank" : undefined}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</a>;
            default:
                // //: update this to use headless Button
                // return <button onClick={props.onClick} type="button" className={buttonClasses}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</button>
                return <Button className={buttonClasses} onClick={props.onClick}>{props.iconPosition === 'start' && icon}{props.text}{props.iconPosition === 'end' && icon}</Button>;
        }
    }

    return (
        <>
            {renderButton()}
        </>
    )
}

export default MyButton;