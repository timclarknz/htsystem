import React, { Component } from 'react'
import { formatTime } from './modules/Formatting'
import { getDayOfWeek} from './modules/dayofweek'

export default class StudentClassDetails extends Component {
    render() {
        var stu = this.props.student
        var classeslist = this.props.classes
        if(stu.jsclass){
        var jsclass = JSON.parse(stu.jsclass)
        var classes = [...new Set(jsclass.map(x => x.classid))]
      
        return classes.map(c => (
            <div key={c}>
                <div>{classeslist.find(x => x.id==c).name}</div>
                {jsclass.filter(j => j.classid==c).map((js,index) => (
                    <div className="d-flex" key={index}><div style={cdstyle}>{getDayOfWeek(js.dayofweek)}</div>
                <div style={cdstyle}>{formatTime(this.props.classdays.find(cd => cd.id==js.classdayid).starttime)}-
                {formatTime(this.props.classdays.find(cd => cd.id==js.classdayid).endtime)}</div>
                <div><i className="fas fa-times-circle text-danger"></i></div>
                </div>
                ))}
            </div>
        ))
        }
        else {
            return ( <div>No Classes</div>)
        }
    }
}

const cdstyle = {
    width: "33%"
}