// wait, I don't think this will work because there's no return. Also not sure how this would wor on an SPA

import { useEffect } from "react";

const Title = (props: {text: string}) => {
    // to set the <title> for each page, do this
    useEffect(() => {
        document.title = props.text;
    }, []);

    // return (
        
    // );
}

export default Title;