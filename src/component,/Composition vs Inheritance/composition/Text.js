import React from "react";


export default function Text({addEmoji , addBraket}){
let text = "i am a javascript language";
if(addEmoji){
    text = addEmoji(text, "❤")
}
if(addBraket){
    text = addBraket(text, "❤")
}

return <div>
    {text}

    </div>

}