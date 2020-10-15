import React, { Component } from 'react'
import ClassDayList from './ClassDayList'

const daysofweek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

export default class Classes extends Component {
    render() {
        console.log(this.props.data)
        const htclasses  = this.props.data.htclasses
        const classdays = this.props.data.classdays
        return (
            <div>
                <div className="d-flex justify-content-between">
               <div>{htclasses.length} Classes</div><div><i className="fas fa-plus-circle text-success"></i></div>
               </div>
               <div className="d-flex justify-content-between" >{daysofweek.map((d,i) => (
                   <div  style={daystyle} className="p-2 rounded"><div className="" style={daytitle}>{d}</div><hr></hr>
                   <ClassDayList data={this.props.data} classdays={classdays} dayofweek={(i+1)}/>
                   </div>
               ))}</div>
               
            </div>
        )
    }
}

const daytitle = {
    textAlign: "center"
}

const daystyle = {
    border: "solid",
    borderWidth: "1px",
    borderColor: "lightgray"
}