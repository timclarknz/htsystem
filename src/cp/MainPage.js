import React, { Component } from 'react'
import Students from './Students'
import Admin from './Admin'


export default class MainPage extends Component {
    render() {
        if (this.props.data) {
        switch (this.props.selectedPage) {
            case "Today":
                return (<div>Today</div>)
            case "Students":
                
                    return (
                        <div className="p-2">
                            <h5>{this.props.data.students.filter((s) => s.status === this.props.selectedPageSub).length} Students </h5>
                            <Students studentData={this.props.data} selectedPageSub={this.props.selectedPageSub} />
                        </div>
                )
            
             case "Admin":
                
                    return (
                        <div className="p-2">
                            <Admin data={this.props.data} selectedPageSub={this.props.selectedPageSub} />
                        </div>
                    )
                
            default:
                return (<div>No Page</div>)
            }
        }
                else
                {
                    return (
                        <div className="spinner-border">Loading...</div>
                    )
                    }
    }
}
