import react from "react";

function InputBar(props) {
    return (
        <div className="searchbar">
            <p className="placeholder">Type a message...</p>
            <img className="btnsubmit" src={props.source} alt="btnsubmit"/>
        </div>
    )
}

export default InputBar;