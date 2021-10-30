import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render(props) {
        return (
            <div>
                <h1>Corporationbank {this.props.info.name}</h1>
            </div>
        )
    }
}
