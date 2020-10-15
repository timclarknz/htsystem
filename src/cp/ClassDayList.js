import React, { Component } from 'react'
import ClassView from './ClassView'
import ClassTime from './ClassTime'

var starttime=""

export default class ClassDayList extends Component {
    
    changeStartTime(t)
    {
        starttime=t
    }
    render() {
        const todaysclasses = this.props.classdays.filter((c) => c.dayofweek === this.props.dayofweek).sort((a,b) => a.starttime > b.starttime)
        
        return (
            <div>
                
                {todaysclasses.map((c) => (
                    
                    <div><div><ClassTime classtime={c.starttime} starttime={starttime} changeStartTime={(v) => this.changeStartTime(v)} /></div><ClassView data={this.props.data} classday={c} /></div>
                ))}
            </div>
        )
    }
}
