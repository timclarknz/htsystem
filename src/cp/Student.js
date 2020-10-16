import React, { Component } from 'react'
import StudentDetails from './StudentDetails'
import StudentClassDetails from './StudentClassDetails'
import StudentBills from './StudentBills'

export default class Student extends Component {
    render() {
        var student = this.props.data.students.find(s => s.id===this.props.selectedPageSub)
      
        if(student){
        return (
            <div>
                <div className="row">
                    <div className="col-3"><StudentDetails student={student} /></div>
                    <div className="col-6"><StudentClassDetails student={student} classes={this.props.data.htclasses} classdays={this.props.data.classdays}/></div>
                </div>
                <div className="row mt-2">
                    <div className="col-6"><StudentBills student={student} /></div>
                    
                </div>
            </div>
        )
        }
        else
        {
            return (<div>No Student with that name</div>)
        }
    }
}
