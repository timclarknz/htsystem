import React, { Component } from 'react';
import Menu from './cp/Menu';

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
        <div>
          <Menu />
        </div>
      )
      
      }
  }
}

