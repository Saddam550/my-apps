import React from "react";

export default class Braket extends React.Component{
    addBraket = (braket) =>`[ ${braket} ]`
    render(){
        return this.props.children({addBraket: this.addBraket})
    }
}