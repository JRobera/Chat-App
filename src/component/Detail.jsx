import React from "react";

function Detail(props) {
    return (
        <div className="detail">
            <h3>{props.name}</h3>
            <p>{props.status}</p>
        </div>
    )

}

export default Detail;