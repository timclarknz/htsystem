import React, { Component } from 'react'
import JQuery from 'jquery'

export default class TodayStudentView extends Component {

    attend(at)
    {

        const d = new Date()
        const dd = "" + d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()
        const a = {
            table: "attendance",
            indclassid: this.props.indclass,
            studentiid: this.props.student.id,
            classid: this.props.classid,
            indclassdate: dd,
            attendance: at
        }
        
      JQuery.post("https://api.htexplore.vn/insert/",a,function(data){
        
      })
    }

    render() {
        
        const at = this.props.data.attendance.find((a) => a.studentiid === this.props.student.id && a.indclassid == this.props.indclass)
      
         
            return (
                <div className="d-flex justify-content-between">
                    <div className="w-50">
                        <div style={studentstyle}>{this.props.student.name}</div>
                        <div style={phonestyle}>{this.props.student.phone}</div>
                    </div>
                    <div>
                        <button style={bstyle} className="btn-success m-1" onClick={(e) => this.attend(1, e)}></button>
                        <button style={bstyle} className="btn-warning m-1" onClick={(e) => this.attend(2, e)}></button>
                        <button style={bstyle} className="btn-danger m-1" onClick={(e) => this.attend(3, e)}></button>

                    </div>
                    {at ? <div><input className="rounded mt-1" type="text" placeholder="Notes..." value={at.absentreason}></input></div> : <div><input className="rounded mt-1" type="text" placeholder="Notes..."></input></div>}
                    
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