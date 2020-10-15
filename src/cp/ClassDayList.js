import React, { Component } from 'react'
import ClassView from './ClassView'




export default class ClassDayList extends Component {
    
    formatDate(d) {
        var dd = d.split(":");
        var hours = parseInt(dd[0]);
        var ampm = "am"
        if (hours > 12)
        {
            hours -= 12;
            ampm = "pm"
            }
        return ""+hours+":"+dd[1]+" "+ampm
    }
   
    render() {
        const todaysclasses = this.props.classdays.filter((c) => c.dayofweek === this.props.dayofweek).sort((a,b) => a.starttime > b.starttime)
        const startTimes = [...new Set(todaysclasses.map(x => x.starttime))]
        
        return startTimes.map( (st) => (
            <div className="rounded p-2 mb-2" style={starttime}>
                <div className="mb-2">{this.formatDate(st)}</div>
                {todaysclasses.filter(tc => tc.starttime===st).map((c) => (
                    
                    <div><ClassView data={this.props.data} classday={c} /></div>
                ))}
            </div>
        ))
    }
}

const starttime = {
    backgroundColor: "#CCCCCC",
    color: "#444444",
 
}