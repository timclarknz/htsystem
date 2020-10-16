import React, { Component } from 'react'
import {formatPhone} from './modules/Formatting'

const status = ["New Student","Active","Pending","Stopped"]

export default class StudentDetails extends Component { 
    render() {
        var stu = this.props.student
        return (
            <div className="" key={stu.id}>
                {stu.image ? <img src={stu.image} alt="None"></img> : <i className="fas fa-user-circle"></i>}
                <div></div>
                <div>{stu.name}</div>
                <div style={hstyle}>Phone</div>
                <div>{formatPhone(stu.phone)}</div>
                <div style={hstyle}>Zalo</div>
                {stu.zalodisplayname ? <div>{stu.zalodisplayname}</div> : <div>None</div>}
                <div style={hstyle}>Address</div>
                {stu.address ? <div>{stu.address}</div> : <div>None</div>}
                <div style={hstyle}>Date of Birth</div>
                {stu.dob ? <div>{stu.dob}</div> : <div>None</div>}
                <div style={hstyle}>Date started</div>
                {stu.startdate ? <div>{stu.startdate}</div> : <div>None</div>}
                <div style={hstyle}>Status</div>
                <select style={statusstyle} value={stu.status}>{status.map((s,i) => (<option key={i} value={i}>{s}</option>))}</select>
            </div>
        )
    }
}

const hstyle = {
    fontSize: "0.7em",
    color: "lightblue"
}

const statusstyle = {
    border: "none"
}