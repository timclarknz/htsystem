import React, { Component } from 'react'
import JQuery from 'jquery'
import {formatDate} from './modules/Formatting'
import NumberFormat from 'react-number-format';

export default class StudentBills extends Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
          isLoaded: false
        }
        
      }

      componentDidMount() {
      
        var a = {
            studentid: this.props.student.id
        }
        JQuery.getJSON("https://api.htexplore.vn/bills/",a,data => {
            this.setState({
                isLoaded: true,
                bills: data.billitem,
                payments: data.payment
            })
        })
       
      }
    
    render() {
        
        if(this.state.isLoaded){
            const unpaidbills = this.state.bills.filter(b => b.paymentid==0)
            const billdates = [...new Set(unpaidbills.map(x => x.billdate))]
            const totalunpaid = unpaidbills.reduce((a,b) => a+b.amount,0)
        return (
            <div>
                <div className="d-flex justify-content-between">
                    <div>Unpaid bills:</div>
                    <div><i className="fas fa-plus-circle text-success fa-lg"></i></div>
                </div>
                <hr></hr>
                {billdates.map( bd =>
                    (
                        <div key={bd}>
                        <div style={billdatestyle}>{formatDate(bd)}</div>
                        {unpaidbills.filter(up => up.billdate===bd).map(up => (
                            <div key={up.id} className="d-flex justify-content-between"><div>{up.notes}</div><div><NumberFormat value={up.amount} displayType={'text'} thousandSeparator={true} /></div></div>
                        ))}

                       <hr></hr>
                       </div>
                       
                    ))}
                    
                <div className="d-flex justify-content-between">
                <div>Total Bills:</div><div><NumberFormat value={totalunpaid} displayType={'text'} thousandSeparator={true} /></div>
                </div>
            </div>
        )
        }
        else{
            return (
                <div>Loading...</div>
            )
        }
    }
}

const billdatestyle = {
    fontSize: "0.7em",
    color: "lightblue"
}