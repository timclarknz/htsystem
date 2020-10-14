import React, { Component } from 'react'
import AdminTask from './AdminTask'
import TodayClasses from './TodayClasses'

export default class Today extends Component {
    render() {
       
        return (
            <div className="p-2">
                <div className="d-flex justify-content-between">
                <AdminTask title={"Daily Admin Tasks"} tasks={this.props.data.admindailytaskrecord}
                />
                <AdminTask title={"Bills collected"}/>
                </div>
                <div className="d-flex justify-content-between p-2 shadow-lg p-3 mt-1 bg-white rounded">
                    <div style={divstyle}>Class</div>
                    <div style={divstyle}>Teacher</div>
                    <div style={divstyle}>Room</div>
                    <div style={divstyle}>Students</div>
                    <div style={divstyle}>Attendance</div>
                    <div style={divstyle}>Settings</div>
                </div>
                <TodayClasses data={this.props.data}/>
            </div>
        )
    }
}

var divstyle = {
    width: "16%",
    fontWeight: "bold"
}