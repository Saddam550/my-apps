

import Inharitance from "./Inharitance"

export default class Text extends Inharitance{
    /* eslint-disable no-useless-constructor */
    constructor(props){
        super(props)
    }
    render(){
        const decoratodText = this.addEomji("i am javascript language" , "❤")
    return super.render(decoratodText)
    }
}