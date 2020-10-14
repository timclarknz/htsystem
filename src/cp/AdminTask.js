import React, { Component } from 'react'

export default class AdminTask extends Component {


    pbstyle()
    {
        var p = this.props.tasks.filter((t) => t.completed!=null).length / this.props.tasks.length;
        var g = {width: (p*100)+"%",height: "20px"};
        return g
    }

    render() {
     
        if(this.props.tasks){
            return (
                <div  style={admintaskstyle} className="rounded p-2">
                    <div className="d-flex justify-content-between">
                        <div>{this.props.title}</div>
                        <div>{this.props.tasks.filter((t) => t.completed!=null).length}/{this.props.tasks.length}</div>
                    </div>
                    <div className="progress-bar rounded" style={this.pbstyle()}></div>
                </div>
            )
        }
        else
        {
        return (
            <div style={admintaskstyle} className="m-2 rounded p-2">
                {this.props.title}
               {/*  <div className="progress-bar rounded" style={pb}></div> */}
            </div>
        )
            }
    }
}

const admintaskstyle ={
    width: "50%",
    backgroundColor: "#027e96",
    color: "white"
}

/* const pb = {
    width: "20%",
    height: "20px"
} */

