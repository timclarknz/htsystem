import React, { Component } from 'react'

export default class TodayStudentView extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between">
                <div className="w-50">
                <div style={studentstyle}>{this.props.student.name}</div>
                <div style={phonestyle}>{this.props.student.phone}</div>
                </div>
                <div>
                    <button style={bstyle} className="btn-success m-1"></button>
                    <button style={bstyle} className="btn-warning m-1"></button>
                    <button style={bstyle} className="btn-danger m-1"></button>

                </div>

                <div><input className="rounded mt-1" type="text" placeholder="Notes..."></input></div>
            </div>
        )
    }
}

const studentstyle = {
    fontSize: "1em"
}

const phonestyle = {
    fontSize: "0.7em"
}

const bstyle = {
    width: "30px",
    height: "30px",
    border: "solid",
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: "15px",
    borderWidth: "3px"

}