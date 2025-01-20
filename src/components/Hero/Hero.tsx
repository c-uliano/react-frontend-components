// TODO this is pulled directly from an old project, needs to be updated
// //add the classes to the appropriate divs, import the module.scss
// or you could add all the cooresponding bootstrap classes that would do the same thing, but that's a lot of classes
// prop to conditionally render Link or anchor for the button
// ? Should my Button component have prop to decide between anchor and Link?
// this should eventually be a Button component
// expand all current props to be typescripted up

// //! I don't remember why the jsx is structured like this, need to look at the example project

// TODO:
// //prop for height?, string
// //prop for image url, string
// //prop for background position, string
// //prop for h1
// //prop for content
// //prop for link?, string
// //prop for button (this will eventully have to be refactored to use Button component, not created)
// need a prop to choose which type of button is being used, i.e. btn-primary

import React from "react";
import styles from "./hero.module.scss";
import { HeroProps } from "./utils";
import Button from "../Button/Button";
// // TODO: can this long list of props be put in the utils folder and just use an interface here?
const Hero = (props: HeroProps) => {
    const bgHero: object = {
        height: props.height || "50vh"
    };
    // //TODO: bgPosition default of center center?
    const bgHeroBefore: object = {
        backgroundImage: `url(${props.imgUrl})`,
        backgroundPosition: props.bgPosition || "center center",
    };

    return (
        <div className={`px-4 py-5 text-center ${styles.bgHero}`} style={{...bgHero}}>
            <div className={styles.bgHeroBefore} style={{...bgHeroBefore}}></div>
            <div className="py-5 w-100">
                {/* TODO: if this prop isn't used does this leave a space? Update so if it's not used this doesn't effect the dom at all */}
                <h1 className="display-5 fw-bold text-white mt-2">{props.h1Header}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mt- text-white">{props.content}</p>
                    {props.link && (
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            {/* <a href={`${props.link}`} className="btn btn-primary">
                                {props.btnText}
                            </a> */}
                            <Button {...props.buttonProps} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Hero.defaultProps = {
//     height: "50vh",
// };

export default Hero;
