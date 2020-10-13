import React, { Component } from 'react';
import Menu from './cp/Menu';
import MainPage from './cp/MainPage'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       login: 1
    }
  }
  
  render() {
    if (this.state.login === 0) {
      return (
        <div>
          Not logged in
        </div>
      )
    }
    else
    {
      return (
        <div className="row">
          <div className="col-2"><Menu /></div>
          <div className="col-10"><MainPage /></div>
        </div>
      )
      
      }
  }
}

