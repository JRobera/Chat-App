import React from "react";

function Photo(props) {
    return <img className="photo" src={props.source} alt="dog"/>
}

export default Photo;