import React, { Component } from 'react'

export default class Students extends Component {
    
    getClassName(id)
    {
        const c = this.props.studentData.htclasses.find(v => v.id === id)
        if (c) {
            return c.name
        }
        else
        {
            return "No Class"
            }
        
    }

    render() {
        
        if (this.props.studentData) {
            return this.props.studentData.students.filter((s) => s.status === this.props.selectedPageSub ).map((s) => (
                <div className="d-flex justify-content-around">
                    <div>{s.name}</div><div>{s.phone}</div><div></div>
                </div>

            ))
        }
            else
            {
                   
            return <div>Loading...</div>
                    
            }
        
        }
 }
   

