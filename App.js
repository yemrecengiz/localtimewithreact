import React, { Component } from 'react'

class App extends Component {

  constructor(){

    super();
    this.state ={
      time: new Date().toLocaleTimeString()
    }; 
  }


  componentDidMount(props){
    setInterval(()=>
    {
      this.setState({
        time: new Date().toLocaleTimeString()
      });
    },1000
    )
  }
  render() {
    return (
      <div>
        <h1>The time is : {this.state.time}</h1>
      </div>
    )
  }
}
export default App;
