import React, { Component } from 'react';


class nevber extends Component {


   buttonHandle(e){  
    e.preventDefault()
        const user =  e.target.value
        this.props.onUserData(user) 
      
    }

    render() {
        return (
            <div>
                <form action="" method="post">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <a className="navbar-brand" href="/">Ster News</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link" value="saddam" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  href="/"><button value="business" onClick={this.buttonHandle} >business</button> </a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="/"> <button value="entertainment" onClick={this.buttonHandle} > entertainment</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"> <button value="general" onClick={this.buttonHandle} > general</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><button value="health" onClick={this.buttonHandle} > health</button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><button value="science" onClick={this.buttonHandle} >science </button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><button value="sports" onClick={this.buttonHandle} >sports </button></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><button value="technology" onClick={this.buttonHandle} > technology </button></a>
                            </li>
                            
                        </ul>
                       
                    </div>
                </nav>
                </form>
            </div>
        );
    }
}

export default nevber;