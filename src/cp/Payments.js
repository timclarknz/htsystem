import React, { Component } from 'react'
import NumberFormat from 'react-number-format';

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
            <div className="d-flex justify-content-between p-2 shadow-lg p-3 mb-5 bg-white rounded">
                <div>{this.get_name(p.studentid)}</div>
                <div><NumberFormat value={p.amount} displayType={'text'} thousandSeparator={true} /></div>
            </div>
        ))
    }
}
