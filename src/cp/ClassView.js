import React, { Component } from 'react'

export default class ClassView extends Component {
    render() {
        const classday = this.props.classday
        const htclass = this.props.data.htclasses.find((c) => c.id==classday.classid)
        const teacher = this.props.data.htusers.find((t) => t.id==classday.teacherid)
        const students = []
        this.props.data.students.forEach((s) => {
            if(s.jsclass){
                const jsc = JSON.parse(s.jsclass)
                jsc.forEach((scd) => {
                    if(scd.classdayid==classday.id)
                    {
                        students.push(s)
                    }
                })
            }
        })
        
        return (
            <div>
               
                <div className="p-2 mb-1 rounded" style={cvstyle}>
                   
                    <div style={classtitle}>{htclass.name}</div>
                     <div className="d-flex"><div className="flex-fill">
                    <div style={teacherstyle}>{teacher.name}</div>
                    <div style={students.length > 10 ? studentcounthigh : students.length > 6 ? studentcountlow : studentcountvlow}>{students.length} students</div>
                    </div>
                    <div className="pl-2 flex-fill">
                    
                    <div style={roomnumber}>R {classday.room}</div>
                    </div></div>
                    
                </div>
            </div>
        )
    }
}

const cvstyle = {
    backgroundColor: "#027e96"
}

const classtitle = {
    color: "white",
    fontSize: "1em"
}

const teacherstyle = {
    color: "lightgrey",
    fontSize: "0.7em"
}

const studentcounthigh = {
    color: "#5cb85c",
    fontSize: "0.7em"
}

const studentcountlow = {
    color: "#f0ad4e",
    fontSize: "0.7em"
}

const studentcountvlow = {
    color: "#fa9a93",
    fontSize: "0.7em"
}

const roomtitle = {
    color: "white",
    fontSize: "0.7em",
    textAlign: "center"
}

const roomnumber = {
    color: "white",
    textAlign: "center"
}