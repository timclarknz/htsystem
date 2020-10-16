import React, { Component } from 'react'


const status = ["New Student","Active","Pending","Stopped"]

export default class StudentDetails extends Component {
    render() {
        var stu = this.props.student
        return (
            <div className="" key={stu.id}>
                {stu.image ? <img src={stu.image} alt="None"></img> : <i className="fas fa-user-circle"></i>}
                <div></div>
                <div>{stu.name}</div>
                <div>Phone</div>
                <div>{stu.phone}</div>
                <div>Zalo</div>
                {stu.zalodisplayname ? <div>{stu.zalodisplayname}</div> : <div>None</div>}
                <div>Address</div>
                {stu.address ? <div>{stu.address}</div> : <div>None</div>}
                <div>Date of Birth</div>
                {stu.dob ? <div>{stu.dob}</div> : <div>None</div>}
                <div>Date started</div>
                {stu.startdate ? <div>{stu.startdate}</div> : <div>None</div>}
        <select value={styleMedia.status}>{status.map((s,i) => (<option key={i} value={i}>{s}</option>))}</select>
            </div>
        )
    }
}
