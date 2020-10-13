import React, { Component } from 'react'

export default class MenuItem extends Component {
    render() {
        
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
                        <a href="#"><i className={this.props.item.fa}></i> {this.props.item.title}</a>
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
