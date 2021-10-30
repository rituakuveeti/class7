import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"ritu"
        }
    }
    
    render() {
        setTimeout(() => {
            this.setState({name:"ritu akuveeti"})
            
        }, 3000);
        return (
            <div>
                <h1>{this.state.name}</h1>
                
            </div>
        )
    }
}
