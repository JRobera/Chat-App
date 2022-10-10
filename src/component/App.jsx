import react from "react";
import Header from "./Header";
import Phone from "./Phone";

function App(){
    return (
        <div className="main-content">
            <Phone />
            <div className="about">
                <Header title="Simple booking"/>
                <p> Stay in touch with our dog walkers through the chat interface. This makes it easy to 
                    discuss arrangements and make bookings. Once the walk has been completed you can rate 
                    your walker and book again all through the chat.</p>
            </div>

        </div>
    )
}

export default App;