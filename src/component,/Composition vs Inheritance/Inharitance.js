import React from "react";

export default class Emoji extends React.Component{
    addEomji = (text, emoji) => `${emoji} ${text} ${emoji}`
  
    // eslint-disable-next-line react/require-render-return
    render(overright){
   let text = "i am tha inhartince component"
   if(overright) text = overright
   return <div> {text}</div>
    }
}