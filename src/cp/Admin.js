import React, { Component } from 'react'
import Payments from './Payments'

export default class Admin extends Component {
    render() {
        switch (this.props.selectedPageSub) {
        case 0:
        return (
            <div>
               <Payments data={this.props.data} />
            </div>
                )
            default:
                return (
                    <div>No admin page</div>
                )
    }
    }
}
