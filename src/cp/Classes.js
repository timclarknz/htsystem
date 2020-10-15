import React, { Component } from 'react'
import ClassDayList from './ClassDayList'

const daysofweek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

export default class Classes extends Component {
    render() {
        
        const htclasses  = this.props.data.htclasses
        const classdays = this.props.data.classdays
        return (
            <div>
                <div className="d-flex justify-content-between mb-2">
               <div className="ml-2">{htclasses.length} Classes</div><div><i className="fas fa-plus-circle text-success fa-lg mr-2"></i></div>
               </div>
               <div className="d-flex justify-content-between" >{daysofweek.map((d,i) => (
                   <div style={daystyle} className="p-2 rounded  flex-fill"><div className="pb-2" style={daytitle}>{d}</div>
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