import React, { Component } from 'react'

export default class MenuItem extends Component {
    
    menuClick(id,index,e) {
        this.props.selectedPage(id,index);
    }

    render() {
        
        switch (this.props.item.t) {
            case "0":
                return (
                    <div style={hrstyle}>
                        <hr/>
                    </div>
                )
            case "1":
                return (
                    <div>
                        <h6>{this.props.item.title}</h6>
                    </div>
                )
            case "2":
                if (this.props.item.submenu) {
                    return (
                        <div>
                        <div className="d-flex justify-content-between" data-toggle="collapse" data-target={"#mc"+this.props.item.title}>
                            <div><i className={this.props.item.fa} style={fastyle}></i> {this.props.item.title}</div>
                                <div><i className="fas fa-chevron-right fa-xs"></i></div>
                        </div>
                            <div id={"mc"+this.props.item.title} className="collapse" >
                                <div className="bg-white py-2 collapse-inner rounded" id="1"></div>
                                {
                                    this.props.item.submenu.map((m,i) => {

                                        return <div onClick={(e) => this.menuClick(this.props.item.title,i, e)}><a className="collapse-item" data-toggle="collapse" data-target={"#mc" + this.props.item.title} href="#">{m.title}</a></div>
                                    })
                                }
                               
                            </div>
                        </div>
                        
                    )
                        
                    
                }
                
                else {
                    return (
                        <div onClick={(e) => this.menuClick(this.props.item.title, e)}>
                            <i className={this.props.item.fa} style={fastyle}></i> {this.props.item.title}
                        </div>
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

const hrstyle = {
    color: "white"
}