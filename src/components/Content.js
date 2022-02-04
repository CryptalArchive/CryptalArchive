import React from 'react';
import About from './About';
import Archive from './Archive';

function Content(props) {

    return (
    <div style={{marginTop: "100px"}}>
        {props.content === "archive" && <Archive />}
        {props.content === "about" && <About />}
    </div>
    );
}
export default Content;