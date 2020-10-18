import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import CalendarToday from '@material-ui/icons/CalendarToday';

export default class MenuItem extends Component {
    
    menuClick(id,index,e) {
        this.props.selectedPage(id,index);
    }

    render() {
        
        switch (this.props.item.t) {
            case "0":
                return (
                    <div className="p-0 m-0">
                        <hr style={{borderColor: "#dddddd",marginLeft: "20px", marginRight: "20px"}} />
                    </div>
                )
            case "1":
                return (
                    <div className="pl-1" style={subtitlestyle}>
                        {this.props.item.title}
                    </div>
                )
            case "2":
                if (this.props.item.submenu) {
                    return (
                        <div className="p-2 pl-3">
                        <div className="d-flex justify-content-between" data-toggle="collapse" data-target={"#mc"+this.props.item.title}>
                            <div className="menuitem"><i className={this.props.item.fa} style={fastyle}></i> {this.props.item.title}</div>
                                <div><i className="fas fa-chevron-right fa-xs"></i></div>
                        </div>
                            <div id={"mc"+this.props.item.title} className="collapse" >
                                <div className="bg-white p-2 m-2 collapse-inner rounded" id="1">
                                {
                                    this.props.item.submenu.map((m,i) => {

                                        return <div key={i} className="" onClick={(e) => this.menuClick(this.props.item.title,i, e)}><button className="collapse-item submenu" data-toggle="collapse" data-target={"#mc" + this.props.item.title} href="#">{m.title}</button></div>
                                    })
                                }
                               </div>
                            </div>
                        </div>
                        
                    )
                        
                    
                }
                
                else {
                    return (
                        <div className="menuitem pl-3" onClick={(e) => this.menuClick(this.props.item.title, e)}>
                            <i className={this.props.item.fa} style={fastyle}></i> {this.props.item.title}
                        </div>
                        /* <div>
                            <Button 
                            onClick={(e) => this.menuClick(this.props.item.title, e)}
                            size="small"
                            className="menubutton" disableElevation>
                            {this.props.item.title}
                            </Button>
                        </div> */
                    )
                }
                case "3":
                return (
                    <div>
                        <h6 style={titleStyle}>{this.props.item.title}</h6>
                    </div>
                )
            default:
                return (
                    <div>
                        Nothing here
                    </div>
                )
        }
    }
}

const fastyle = {
    width : "20px"
}

const titleStyle = {
    textAlign: "center",
    marginTop: "10px"
}

const subtitlestyle = {
    fontSize: "0.7em"
}

const bstyle = {
    color: "white",
    fontSize: "1em",
    width: "90%",
    marginLeft: "10px",
    marginRight: "10px",
    border: "none",
    backgroundColor: "black"
}

const bselected = {
    color: "red"
}