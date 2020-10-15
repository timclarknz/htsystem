import React, { Component } from 'react'
import TodayStudentView from './TodayStudentView'
import JQuery from 'jquery'

const rooms = [1, 2, 3, 4, 5, 6];

export default class TodayClassView extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
           teacherid: props.teacherid
        }
         this.changeTeacher = this.changeTeacher.bind(this);
    }
    getStudents()
    {
        var a = [];
        var d = new Date();
       
        this.props.data.students.forEach((s) => {
            if(s.jsclass){
            var c = JSON.parse(s.jsclass)
            if(c){
                c.forEach((jsc) => {
                    if(jsc.classid==this.props.classid && jsc.dayofweek==(d.getDay())){
                        a.push(s)
                    }
                })
            }
        }
        });
        return a
    }

    changeTeacher(event)
    {
        this.setState({
            teacherid: event.target.value
        });

        var a = {
            table: "individualclass",
            id: this.props.id,
            teacherid: event.target.value
        }

        JQuery.post("https://api.htexplore.vn/update/", a, function (data) {
           
            console.log(data);
            
        });

    }
  
    render() {
        
        return (
            <div>
            <div className="p-2 shadow-lg p-3 mt-1 bg-white rounded d-flex justify-content-between">
                <div style={divstyle}data-toggle="collapse" data-target={"#ic"+this.props.id}>{this.props.name} <i className="fas fa-chevron-down fa-xs"></i></div>
                <div style={divstyle}><select value={this.state.teacherid} style={selectStyle} onChange={this.changeTeacher}>{this.props.data.htusers.filter((t) => (t.role>=1 && t.status===0)).map((u) => (
                <option value={u.id}>{u.name}</option>
                ))}</select></div>
            <div style={divstyle}><select id={"t"+this.props.id} value={this.props.room} style={selectStyle}>{rooms.map((r) => <option>{r}</option>)}</select></div>
                <div style={divstyle}>{this.getStudents().length} Students </div>
                <div style={divstyle} className="d-flex">
                
                    <div style={atstyle} className="bg-success">{this.props.data.attendance.filter((a) => a.indclassid==this.props.id && a.attendance===1).length}</div>
                    <div style={atstyle} className="bg-warning">{this.props.data.attendance.filter((a) => a.indclassid==this.props.id && a.attendance===2).length}</div>
                    <div style={atstyle} className="bg-danger">{this.props.data.attendance.filter((a) => a.indclassid==this.props.id && a.attendance===3).length}</div>
                    

                    </div>
                    <div style={divstyle} ><div style={atstyle} className="bg-info"><i className="fas fa-ellipsis-h"></i></div></div>
            </div>

                <div id={"ic" + this.props.id} className="collapse p-2">  {this.getStudents().map((s) => (<TodayStudentView data={this.props.data} student={s} indclass={this.props.id} classid={this.props.classid}/>))}</div>
                  
            </div>
        )
    }
}

var atstyle = {
    width: "30px",
    height: "30px",
    borderRadius: "15px",
    textAlign: "center",
    paddingTop: "2px",
    color: "white",
    marginLeft: "5px",
    textShadow: "2px 2px 4px #000000"
    
}

var selectStyle = {
    border: "none"
}

var divstyle = {
    width: "16%"
}