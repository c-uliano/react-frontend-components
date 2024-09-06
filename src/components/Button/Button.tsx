import { ButtonProps } from "./utlis";


const Button = (props: ButtonProps) => {

    const renderButton = () => {
        switch (props.btnType) {
            case 'button':
                return <button onClick={props.onClick} type="button" className="btn">{props.text}</button>;
            default:
                return <button onClick={props.onClick} type="button" className="btn">{props.text}</button>
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