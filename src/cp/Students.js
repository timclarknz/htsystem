import React, { Component } from 'react'

export default class Students extends Component {
    
    getClassName(id)
    {
        const c = this.props.studentData.htclasses.find(v => v.id === id)
        if (c) {
            return c.name
        }
        else
        {
            return "No Class"
            }
        
    }

    showStudent(id)
    {
        //alert(id)
        this.props.showStudent("Student",id)
    }

    render() {
        
       
            return this.props.studentData.students.filter((s) => s.status === this.props.selectedPageSub ).map((s) => (
                <div className="d-flex justify-content-between" key={"S"+ s.id}>
                    <div style={studentstyle} onClick={() => this.showStudent(s.id)}>{s.name}</div><div>{s.phone}</div><div></div>
                </div>

            ))
      
        
        }
 }
   
const studentstyle = {
    color: "red",
    width: "50%"
}
