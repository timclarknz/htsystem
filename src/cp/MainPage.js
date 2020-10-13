import React, { Component } from 'react'
import Students from './Students'


export default class MainPage extends Component {
    render() {
        
        switch (this.props.selectedPage) {
            case "Today":
                return (<div>Today</div>)
            case "Students":
                if (this.props.data) {
                    return (
                        <div className="p-2">
                            <h5>{this.props.data.students.filter((s) => s.status === this.props.selectedPageSub).length} Students </h5>
                            <Students studentData={this.props.data} selectedPageSub={this.props.selectedPageSub} />
                        </div>
                    )
                }
                else
                {
                    return (
                        <div className="spinner-border">Loading...</div>
                    )
                    }
            default:
                return (<div>No Page</div>)
        }
    }
}
