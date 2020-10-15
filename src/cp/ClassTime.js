import React, { Component } from 'react'

export default class ClassTime extends Component {
    render() {
        if(this.props.classtime!==this.props.starttime){
            this.props.changeStartTime(this.props.classtime)
            return (
                <div>
                    {this.props.classtime}
                </div>
            )
        }
        else
        return (
            <div>
                nothing
            </div>
        )
        
    }
}
