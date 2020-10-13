import React, { Component } from 'react'

export default class MenuItem extends Component {
    render() {
        console.log(this.props)
        
        switch (this.props.item.t) {
            case "0":
                return (
                    <div>
                        <hr/>
                    </div>
                )
            case "1":
                return (
                    <div>
                        <h6>{this.props.item.title}</h6>
                    </div>
                )
            case "2":
                return (
                    <div>
                        <a href="#">{this.props.item.title}</a>
                    </div>
                )
            default:
                return (
                    <div>
                        Nothing here
                    </div>
                )
        }
    }
}
