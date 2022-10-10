import React from "react";

function Pricing(props) {
    return (
        <div className="pricing">
            <span className="circle"></span>
            <p>{ props.time }</p>
            <h3>{ props.price }</h3>
        </div>
    )
}

export default Pricing;