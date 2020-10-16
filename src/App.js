import React, { Component } from 'react';
import Menu from './cp/Menu'
import TopBar from './cp/TopBar'
import MainPage from './cp/MainPage'
import './cp/css/menu.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      login: 1,
      selectedPage: "Student",
      selectedPageSub: 617
    }
     this.timerID = setInterval(
        () => this.tick(),
        10000
      );
  }

  componentDidMount() {
    fetch("https://api.htexplore.vn/appdata/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
            selectedStudent: 0
          });
        
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    )
   
  }
  
  tick() {
 
      fetch("https://api.htexplore.vn/appdata/")
      .then(res => res.json())
      .then(
        (result) => {
          
          this.setState({
              isLoaded: true,
              data: result
              
            });
          
        
          });
         

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
          <div className="col-2 menu" ><Menu selectedPage={ (v,i) => this.setState({selectedPage: v,selectedPageSub: i }) }/></div>
          <div className="col-10">
            <TopBar />
            <MainPage data={this.state.data} selectedPage={this.state.selectedPage} selectedPageSub={this.state.selectedPageSub} showStudent={(v,i) => this.setState({selectedPage: v,selectedPageSub: i })}/>
            </div>
        </div>
      )
      
      }
  }
}

