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
      
        return (
            <div className="d-flex justify-content-around p-2">
                <div style={paymentbox}>
                <h5>Cash Payments</h5>
                {this.props.data.payment.filter((pt) => pt.type===0).map((p) => (
                    <div className="d-flex justify-content-between">
                    <div>{this.get_name(p.studentid)}</div>
                    <div><NumberFormat value={p.amount} displayType={'text'} thousandSeparator={true} /></div>
                    </div>
                 ))}
                 <hr></hr>
                    <div className="d-flex justify-content-between">
                        <h6>Total: </h6><NumberFormat value={this.props.data.payment.filter((pt) => pt.type===0).reduce((a,b) => a+b.amount,0)} displayType={'text'} thousandSeparator={true} />
                    </div>
                </div>

                <div style={paymentbox}>
                <h5>Internet Payments</h5>
                {this.props.data.payment.filter((pt) => pt.type===1).map((p) => (
                    <div className="d-flex justify-content-between">
                    <div>{this.get_name(p.studentid)}</div>
                    <div><NumberFormat value={p.amount} displayType={'text'} thousandSeparator={true} /></div>
                    </div>
                 ))}
                 <hr></hr>
                     <div className="d-flex justify-content-between">
                        <h6>Total: </h6><NumberFormat value={this.props.data.payment.filter((pt) => pt.type===1).reduce((a,b) => a+b.amount,0)} displayType={'text'} thousandSeparator={true} />
                    </div>
                </div>

                <div style={paymentbox}>
                <h5>Withdraw Cash</h5>
                    <button className="btn btn-success rounded btn-block">
                        Cash Withdrawal
                    </button>
                    <button className="btn btn-info rounded btn-block">
                        Cash Position
                    </button>
                </div>

            </div>
        )
    }
}

const paymentbox = {
    width: "33%",
    padding: "10px"
}