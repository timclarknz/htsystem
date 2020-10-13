import React, { Component } from 'react'

export default class TopBar extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between p-2">
                <div><input className="rounded" type="text" placeholder="Search"></input></div><div className="d-flex p-2"><div className="mr-5"><i className="fas fa-bell"></i></div><div>Tim <i className="fas fa-user-circle mr-3"></i></div></div>
            
            </div>
        )
    }
}
