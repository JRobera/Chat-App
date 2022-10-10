import React from "react";
import Avatar from "./Avatar";
import { MessageLeft, MessageRight } from "./Message";
import InputBar from "./InputBar";
import Photo from "./Photo";
import Share from "./Share";
import Detail from "./Detail";
import Pricing from "./Pricing";

function Phone() {
    return(
        <div className="phone">
            <div className="screen">
                <div className="profile">
                    <img className="arrow" src="chevron-left-solid.svg" alt="left-arrow" />
                    <Avatar source="avatar.jpg" />
                    <Detail name="Samuel Green" status="Avilable to walk" />
                    <Share />
                </div>

                <MessageLeft 
                    chat="That sounds great. I’d be happy with that." />
                <MessageLeft 
                    chat="Could you send over some pictures of your dog, please?" />
               
                <div className="photos" >
                    <Photo source="dog-image-1.jpg" />
                    <Photo source="dog-image-2.jpg" />
                    <Photo source="dog-image-3.jpg" />
                </div>

                <div className="right-chats">
                    <MessageRight 
                        chat="Here are a few pictures. She’s a happy girl!"/>
                    <MessageRight 
                        chat="Can you make it?" />
                </div>

                <MessageLeft 
                        chat="She looks so happy! The time we discussed works. How long shall I take her out for?" />
                
                <Pricing time="30 minute walk" price="$29" />
                <Pricing time="1 hour walk" price="$49" />

                <InputBar source="chevron-right-solid.svg" />
            </div>

        </div>
    )

}

export default Phone;