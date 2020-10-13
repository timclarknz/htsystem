import React, { Component } from 'react'
import Students from './Students'


export default class MainPage extends Component {
    render() {
        
        switch (this.props.selectedPage) {
            case "Today":
                return (<div>Today</div>)
            case "Students":
                return (
                    <div>
               
                        <Students studentData={this.props.data} selectedPageSub={this.props.selectedPageSub} />
                    </div>
                )
            default:
                return (<div>No Page</div>)
        }
    }
}
