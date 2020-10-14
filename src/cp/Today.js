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
                <TodayClasses data={this.props.data}/>
            </div>
        )
    }
}
