import React, { Component } from 'react'
import TodayClassView from './TodayClassView'

export default class TodayClasses extends Component {
    render() {
        console.log(this.props.data)
        return this.props.data.indclasses.map((c) => (
            <div>
                <TodayClassView name={c.name} id={c.id} data={this.props.data} classid={c.classid} teacherid={c.teacherid} room={c.room}/>
            </div>
        ))
    }
}
