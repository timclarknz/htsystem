import React, { Component } from 'react'

export default class Payments extends Component {

    get_name(id) {
        const student = this.props.data.students.find(s => s.id === id)
        if (student)
        {
            return student.name
        }
        else
        {
            return "No Name"
        }
        
    }
    
    render() {
      
        return this.props.data.payment.map((p) => (
            <div className="d-flex justify-content-between p-2">
                <div>{this.get_name(p.studentid)}</div>
                <div>{p.amount}</div>
            </div>
        ))
    }
}
