// TODO this is pulled directly from an old project, needs to be updated
// move objects into util.ts
    // wait, may not need util.ts
// //add the classes to the appropriate divs, import the module.scss
    // or you could add all the cooresponding bootstrap classes that would do the same thing, but that's a lot of classes
// prop to conditionally render Link or anchor for the button
// this should eventually be a Button component
// expand all current props to be typescripted up

// ! I don't remember why the jsx is structured like this, need to look at the example project

import styles from "./hero.module.scss";

const Hero = (props: any) => {
    const bgHero: any = {
        height: `${props.height}`
    };

    const bgHeroBefore: any = {
        backgroundImage: `url(${props.image})`,
        backgroundPosition: `${props.bgPosition}`
    }

    return (
        <div className={`px-4 py-5 text-center ${styles.bgHero}`} style={bgHero}>
            <div className={styles.bgHeroBefore} style={bgHeroBefore}></div>
            <div className="py-5 w-100">
                <h1 className="display-5 fw-bold text-white mt-2">{props.h1Header}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mt- text-white">{props.content}</p>
                    {props.link && (
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href={`${props.link}`} className='btn btn-primary'>{props.btnName}</a>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

Hero.defaultProps = {
    height: '50vh'
};

export default Hero;